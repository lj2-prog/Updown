// src/config/app-metrics.ts
import http from 'node:http';
import client from 'prom-client';
import { env } from './env';


client.collectDefaultMetrics();

export const workflowStartGapSeconds = new client.Histogram({
  name: 'workflow_start_gap_seconds',
  help: 'Seconds between workflow start attempts',
  labelNames: ['workflow_type', 'task_queue'] as const,
  buckets: [0.1, 0.5, 1, 2, 5, 10, 30, 60],
});

export const workflowStartedTotal = new client.Counter({
  name: 'workflow_started_total',
  help: 'Total number of workflow start attempts',
  labelNames: ['workflow_type', 'task_queue'] as const,
});

export const workflowDurationSeconds = new client.Histogram({
  name: 'workflow_duration_seconds',
  help: 'Workflow execution duration in seconds',
  labelNames: ['workflow_type', 'task_queue'] as const,
  buckets: [0.1, 0.5, 1, 2, 5, 10, 30, 60],
});

const lastWorkflowStartMsByKey = new Map<string, number>();

export function recordWorkflowStartGap(params: {
  workflowType: string;
  taskQueue: string;
}): void {
  const { workflowType, taskQueue } = params;
  const key = `${workflowType}:${taskQueue}`;
  const now = Date.now();

  const previousStart = lastWorkflowStartMsByKey.get(key);

  if (previousStart !== undefined) {
    workflowStartGapSeconds.observe(
      {
        workflow_type: workflowType,
        task_queue: taskQueue,
      },
      (now - previousStart) / 1000,
    );
  }

  lastWorkflowStartMsByKey.set(key, now);
}

export function recordWorkflowStarted(params: {
  workflowType: string;
  taskQueue: string;
}): void {
  workflowStartedTotal.inc({
    workflow_type: params.workflowType,
    task_queue: params.taskQueue,
  });
}

export function recordWorkflowDuration(params: {
  workflowType: string;
  taskQueue: string;
  durationSeconds: number;
}): void {
  workflowDurationSeconds.observe(
    {
      workflow_type: params.workflowType,
      task_queue: params.taskQueue,
    },
    params.durationSeconds,
  );
}

export function startAppMetricsEndpoint(): void {
  const server = http.createServer(async (_req, res) => {
    res.setHeader('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  });

  server.listen(env.APP_METRICS_PORT, '0.0.0.0', () => {
    console.log(`App metrics exposed on :${env.APP_METRICS_PORT}/metrics`);
  });
}