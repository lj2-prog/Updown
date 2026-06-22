import { Runtime } from '@temporalio/worker';
import { env } from './env';

export function installObservability(): void {
  Runtime.install({
    telemetryOptions: {
      metrics: {
        prometheus: {
          bindAddress: `0.0.0.0:${env.TEMPORAL_METRICS_PORT}`,
        },
      },
      logging: {
        forward: {
          level: env.LOG_LEVEL,
        },
      },
    },
  });
}