import {z} from 'zod';

export const GetLogRequestSchema = z.object({
});

export type GetLogRequest = z.infer<typeof GetLogRequestSchema>;

export const GetLogResponseSchema = z.object({
});

export type GetLogResponse = z.infer<typeof GetLogResponseSchema>;