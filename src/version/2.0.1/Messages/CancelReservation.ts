import {z} from 'zod';

export const CancelReservationRequestSchema = z.object({
});

export type CancelReservationRequest = z.infer<typeof CancelReservationRequestSchema>;

export const CancelReservationResponseSchema = z.object({
});

export type CancelReservationResponse = z.infer<typeof CancelReservationResponseSchema>;