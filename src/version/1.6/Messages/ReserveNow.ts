import {z} from 'zod';
import {IdToken} from '../Types/IdToken';
import {ReservationStatusEnum} from '../Types/ReservationStatus';

export const ReserveNowRequestSchema = z.object({
  connectorId: z.number().min(0),
  expiryDate: z.string().datetime({offset: true}),
  idTag: IdToken,
  parentIdTag: IdToken.nullish(),
  reservationId: z.number(),
});

export type ReserveNowRequest = z.infer<typeof ReserveNowRequestSchema>;

export const ReserveNowResponseSchema = z.object({
  status: z.nativeEnum(ReservationStatusEnum),
});

export type ReserveNowResponse = z.infer<typeof ReserveNowResponseSchema>;
