import {z} from 'zod';

export const NotifyMonitoringReportRequestSchema = z.object({
});

export type NotifyMonitoringReportRequest = z.infer<typeof NotifyMonitoringReportRequestSchema>;

export const NotifyMonitoringReportResponseSchema = z.object({
});

export type NotifyMonitoringReportResponse = z.infer<typeof NotifyMonitoringReportResponseSchema>;