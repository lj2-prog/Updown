import { z } from 'zod';

export const env = z
  .object({
    LOG_LEVEL: z
      .enum(['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'])
      .default('INFO'),
    METRICS_PORT: z.coerce.number().default(9464),
  })
  .parse(process.env);