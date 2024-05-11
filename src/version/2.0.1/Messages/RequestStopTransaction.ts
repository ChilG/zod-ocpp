import {z} from 'zod';

export const RequestStopTransactionRequestSchema = z.object({
});

export type RequestStopTransactionRequest = z.infer<typeof RequestStopTransactionRequestSchema>;

export const RequestStopTransactionResponseSchema = z.object({
});

export type RequestStopTransactionResponse = z.infer<typeof RequestStopTransactionResponseSchema>;