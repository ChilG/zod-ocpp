import {z} from 'zod';

export const TriggerMessageRequestSchema = z.object({});

export type TriggerMessageRequest = z.infer<typeof TriggerMessageRequestSchema>;

export const TriggerMessageResponseSchema = z.object({});

export type TriggerMessageResponse = z.infer<typeof TriggerMessageResponseSchema>;
