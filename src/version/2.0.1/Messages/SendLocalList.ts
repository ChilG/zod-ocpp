import {z} from 'zod';

export const SendLocalListRequestSchema = z.object({
});

export type SendLocalListRequest = z.infer<typeof SendLocalListRequestSchema>;

export const SendLocalListResponseSchema = z.object({
});

export type SendLocalListResponse = z.infer<typeof SendLocalListResponseSchema>;