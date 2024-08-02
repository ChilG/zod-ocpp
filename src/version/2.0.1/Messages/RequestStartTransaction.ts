import {z} from 'zod';

export const RequestStartTransactionRequestSchema = z.object({});

export type RequestStartTransactionRequest = z.infer<typeof RequestStartTransactionRequestSchema>;

export const RequestStartTransactionResponseSchema = z.object({});

export type RequestStartTransactionResponse = z.infer<typeof RequestStartTransactionResponseSchema>;
