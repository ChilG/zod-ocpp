import {z} from 'zod';
import {IdToken} from '../Types/IdToken';
import {ReasonEnum} from '../Types/Reason';
import {MeterValueSchema} from '../Types/MeterValue';
import {IdTagInfoSchema} from '../Types/IdTagInfo';

export const StopTransactionRequestSchema = z.object({
  idTag: IdToken.nullish(),
  meterStop: z.number(),
  timestamp: z.string().datetime({offset: true}),
  transactionId: z.number(),
  reason: z.nativeEnum(ReasonEnum).nullish(),
  transactionData: z.array(MeterValueSchema).nullish(),
});

export type StopTransactionRequest = z.infer<typeof StopTransactionRequestSchema>;

export const StopTransactionResponseSchema = z.object({
  idTagInfo: IdTagInfoSchema.nullish(),
});

export type StopTransactionResponse = z.infer<typeof StopTransactionResponseSchema>;
