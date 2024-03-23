import { z } from 'zod';
import { CiString255Type } from '../Types/CiString255Type';

export const GetDiagnosticsRequestSchema = z.object({
  location: z.string(),
  retries: z.number().nullish(),
  retryInterval: z.number().nullish(),
  startTime: z.date().nullish(),
  stopTime: z.date().nullish(),
});

export type GetDiagnosticsRequest = z.infer<typeof GetDiagnosticsRequestSchema>;

export const GetDiagnosticsResponseSchema = z.object({
  fileName: CiString255Type,
});

export type GetDiagnosticsResponse = z.infer<typeof GetDiagnosticsResponseSchema>;
