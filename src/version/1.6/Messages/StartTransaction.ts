import {z} from 'zod';
import {IdToken} from '../Types/IdToken';
import {IdTagInfoSchema} from '../Types/IdTagInfo';

export const StartTransactionRequestSchema = z.object({
  connectorId: z.number().min(0),
  idTag: IdToken,
  meterStart: z.number(),
  reservationId: z.number().nullish(),
  timestamp: z.string().datetime({offset: true}),
});

export type StartTransactionRequest = z.infer<typeof StartTransactionRequestSchema>;

export const StartTransactionResponseSchema = z.object({
  idTagInfo: IdTagInfoSchema,
  transactionId: z.number(),
});

export type StartTransactionResponse = z.infer<typeof StartTransactionResponseSchema>;
