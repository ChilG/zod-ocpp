import {z} from 'zod';

export const ResetRequestSchema = z.object({});

export type ResetRequest = z.infer<typeof ResetRequestSchema>;

export const ResetResponseSchema = z.object({});

export type ResetResponse = z.infer<typeof ResetResponseSchema>;
