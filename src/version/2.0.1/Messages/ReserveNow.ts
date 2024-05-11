import {z} from 'zod';

export const ReserveNowRequestSchema = z.object({
});

export type ReserveNowRequest = z.infer<typeof ReserveNowRequestSchema>;

export const ReserveNowResponseSchema = z.object({
});

export type ReserveNowResponse = z.infer<typeof ReserveNowResponseSchema>;