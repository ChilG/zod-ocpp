import {z} from 'zod';

export const ClearDisplayMessageRequestSchema = z.object({
});

export type ClearDisplayMessageRequest = z.infer<typeof ClearDisplayMessageRequestSchema>;

export const ClearDisplayMessageResponseSchema = z.object({
});

export type ClearDisplayMessageResponse = z.infer<typeof ClearDisplayMessageResponseSchema>;