import {z} from 'zod';

export const GetMonitoringReportRequestSchema = z.object({
});

export type GetMonitoringReportRequest = z.infer<typeof GetMonitoringReportRequestSchema>;

export const GetMonitoringReportResponseSchema = z.object({
});

export type GetMonitoringReportResponse = z.infer<typeof GetMonitoringReportResponseSchema>;