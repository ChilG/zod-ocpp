import {z} from 'zod';

export const GetBaseReportRequestSchema = z.object({});

export type GetBaseReportRequest = z.infer<typeof GetBaseReportRequestSchema>;

export const GetBaseReportResponseSchema = z.object({});

export type GetBaseReportResponse = z.infer<typeof GetBaseReportResponseSchema>;
