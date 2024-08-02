import {z} from 'zod';
import {IdToken} from '../Types/IdToken';
import {ChargingProfileSchema} from '../Types/ChargingProfile';
import {RemoteStartStopStatusEnum} from '../Types/RemoteStartStopStatus';

export const RemoteStartTransactionRequestSchema = z.object({
  connectorId: z.number().nullish(),
  idTag: IdToken,
  chargingProfile: ChargingProfileSchema.nullish(),
});

export type RemoteStartTransactionRequest = z.infer<typeof RemoteStartTransactionRequestSchema>;

export const RemoteStartTransactionResponseSchema = z.object({
  status: z.nativeEnum(RemoteStartStopStatusEnum),
});

export type RemoteStartTransactionResponse = z.infer<typeof RemoteStartTransactionResponseSchema>;
