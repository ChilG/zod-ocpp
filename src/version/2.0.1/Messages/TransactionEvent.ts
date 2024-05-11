import {z} from 'zod';

export const TransactionEventRequestSchema = z.object({
});

export type TransactionEventRequest = z.infer<typeof TransactionEventRequestSchema>;

export const TransactionEventResponseSchema = z.object({
});

export type TransactionEventResponse = z.infer<typeof TransactionEventResponseSchema>;