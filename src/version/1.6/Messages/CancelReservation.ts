import {z} from 'zod';
import {CancelReservationStatusEnum} from '../Types/CancelReservationStatus';

export const CancelReservationRequestSchema = z.object({
  reservationId: z.number(),
});

export type CancelReservationRequest = z.infer<typeof CancelReservationRequestSchema>;

export const CancelReservationResponseSchema = z.object({
  status: z.nativeEnum(CancelReservationStatusEnum),
});

export type CancelReservationResponse = z.infer<typeof CancelReservationResponseSchema>;
