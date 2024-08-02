import {z} from 'zod';

export const SetMonitoringLevelRequestSchema = z.object({});

export type SetMonitoringLevelRequest = z.infer<typeof SetMonitoringLevelRequestSchema>;

export const SetMonitoringLevelResponseSchema = z.object({});

export type SetMonitoringLevelResponse = z.infer<typeof SetMonitoringLevelResponseSchema>;
