import {z} from 'zod';

export const DataTransferRequestSchema = z.object({
});

export type DataTransferRequest = z.infer<typeof DataTransferRequestSchema>;

export const DataTransferResponseSchema = z.object({
});

export type DataTransferResponse = z.infer<typeof DataTransferResponseSchema>;