import {z} from 'zod';

export const SetMonitoringBaseRequestSchema = z.object({});

export type SetMonitoringBaseRequest = z.infer<typeof SetMonitoringBaseRequestSchema>;

export const SetMonitoringBaseResponseSchema = z.object({});

export type SetMonitoringBaseResponse = z.infer<typeof SetMonitoringBaseResponseSchema>;
