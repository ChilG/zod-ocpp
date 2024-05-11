import {z} from 'zod';

export const GetTransactionStatusRequestSchema = z.object({
});

export type GetTransactionStatusRequest = z.infer<typeof GetTransactionStatusRequestSchema>;

export const GetTransactionStatusResponseSchema = z.object({
});

export type GetTransactionStatusResponse = z.infer<typeof GetTransactionStatusResponseSchema>;