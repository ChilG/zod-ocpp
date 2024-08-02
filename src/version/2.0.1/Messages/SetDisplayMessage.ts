import {z} from 'zod';

export const SetDisplayMessageRequestSchema = z.object({});

export type SetDisplayMessageRequest = z.infer<typeof SetDisplayMessageRequestSchema>;

export const SetDisplayMessageResponseSchema = z.object({});

export type SetDisplayMessageResponse = z.infer<typeof SetDisplayMessageResponseSchema>;
