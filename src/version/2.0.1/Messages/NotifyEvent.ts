import {z} from 'zod';

export const NotifyEventRequestSchema = z.object({
});

export type NotifyEventRequest = z.infer<typeof NotifyEventRequestSchema>;

export const NotifyEventResponseSchema = z.object({
});

export type NotifyEventResponse = z.infer<typeof NotifyEventResponseSchema>;