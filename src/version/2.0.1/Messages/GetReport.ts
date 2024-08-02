import {z} from 'zod';

export const GetReportRequestSchema = z.object({});

export type GetReportRequest = z.infer<typeof GetReportRequestSchema>;

export const GetReportResponseSchema = z.object({});

export type GetReportResponse = z.infer<typeof GetReportResponseSchema>;
