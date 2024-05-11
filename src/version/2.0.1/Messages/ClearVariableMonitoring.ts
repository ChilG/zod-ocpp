import {z} from 'zod';

export const ClearVariableMonitoringRequestSchema = z.object({
});

export type ClearVariableMonitoringRequest = z.infer<typeof ClearVariableMonitoringRequestSchema>;

export const ClearVariableMonitoringResponseSchema = z.object({
});

export type ClearVariableMonitoringResponse = z.infer<typeof ClearVariableMonitoringResponseSchema>;