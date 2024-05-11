import {z} from 'zod';

export const NotifyDisplayMessagesRequestSchema = z.object({
});

export type NotifyDisplayMessagesRequest = z.infer<typeof NotifyDisplayMessagesRequestSchema>;

export const NotifyDisplayMessagesResponseSchema = z.object({
});

export type NotifyDisplayMessagesResponse = z.infer<typeof NotifyDisplayMessagesResponseSchema>;