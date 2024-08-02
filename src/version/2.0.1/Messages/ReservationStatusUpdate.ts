import {z} from 'zod';

export const ReservationStatusUpdateRequestSchema = z.object({});

export type ReservationStatusUpdateRequest = z.infer<typeof ReservationStatusUpdateRequestSchema>;

export const ReservationStatusUpdateResponseSchema = z.object({});

export type ReservationStatusUpdateResponse = z.infer<typeof ReservationStatusUpdateResponseSchema>;
