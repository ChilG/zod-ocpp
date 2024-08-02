import {z} from 'zod';

export const NotifyReportRequestSchema = z.object({});

export type NotifyReportRequest = z.infer<typeof NotifyReportRequestSchema>;

export const NotifyReportResponseSchema = z.object({});

export type NotifyReportResponse = z.infer<typeof NotifyReportResponseSchema>;
