import { Connection, Client } from '@temporalio/client';
import { loadClientConnectConfig } from '@temporalio/envconfig';
import { nanoid } from 'nanoid';

import { example } from './workflows';
import {
  recordWorkflowDuration,
  recordWorkflowStarted,
  recordWorkflowStartGap,
  startAppMetricsEndpoint,
} from './config/app-metrics';

const taskQueue = 'hello-world';
const workflowType = 'example';
const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function startAndMeasureWorkflow(
  client: Client,
  name: string,
): Promise<void> {
  recordWorkflowStartGap({
    workflowType,
    taskQueue,
  });

  recordWorkflowStarted({
    workflowType,
    taskQueue,
  });

  const startedAt = Date.now();

  const handle = await client.workflow.start(example, {
    taskQueue,
    args: [name],
    workflowId: `hello-${name.toLowerCase()}-${nanoid()}`,
  });

  console.log(`Started workflow ${handle.workflowId}`);

  const result = await handle.result();

  recordWorkflowDuration({
    workflowType,
    taskQueue,
    durationSeconds: (Date.now() - startedAt) / 1000,
  });

  console.log(result);
}

async function run(): Promise<void> {
  startAppMetricsEndpoint();

  const config = loadClientConnectConfig();
  const connection = await Connection.connect(config.connectionOptions);
  const client = new Client({ connection });


  const p1 = startAndMeasureWorkflow(client, 'Temporal');

await sleep(3000);

const p2 = startAndMeasureWorkflow(client, 'Leon');

await sleep(3000);

const p3 = startAndMeasureWorkflow(client, 'Grafana');

await Promise.all([p1, p2, p3]);

  console.log(
    'Starter service is still running so Prometheus can scrape /metrics',
  );

  await new Promise(() => {});
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});