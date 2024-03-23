import {z} from 'zod';
import {RemoteStartStopStatusEnum} from '../Types/RemoteStartStopStatus';

export const RemoteStopTransactionRequestSchema = z.object({
  transactionId: z.number(),
});

export type RemoteStopTransactionRequest = z.infer<typeof RemoteStopTransactionRequestSchema>;

export const RemoteStopTransactionResponseSchema = z.object({
  status: z.nativeEnum(RemoteStartStopStatusEnum),
});

export type RemoteStopTransactionResponse = z.infer<typeof RemoteStopTransactionResponseSchema>;
