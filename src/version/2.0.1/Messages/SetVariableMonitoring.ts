import {z} from 'zod';

export const SetVariableMonitoringRequestSchema = z.object({});

export type SetVariableMonitoringRequest = z.infer<typeof SetVariableMonitoringRequestSchema>;

export const SetVariableMonitoringResponseSchema = z.object({});

export type SetVariableMonitoringResponse = z.infer<typeof SetVariableMonitoringResponseSchema>;
