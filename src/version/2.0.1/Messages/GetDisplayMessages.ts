import {z} from 'zod';

export const GetDisplayMessagesRequestSchema = z.object({
});

export type GetDisplayMessagesRequest = z.infer<typeof GetDisplayMessagesRequestSchema>;

export const GetDisplayMessagesResponseSchema = z.object({
});

export type GetDisplayMessagesResponse = z.infer<typeof GetDisplayMessagesResponseSchema>;