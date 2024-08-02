import {z} from 'zod';

export const ChangeAvailabilityRequestSchema = z.object({});

export type ChangeAvailabilityRequest = z.infer<typeof ChangeAvailabilityRequestSchema>;

export const ChangeAvailabilityResponseSchema = z.object({});

export type ChangeAvailabilityResponse = z.infer<typeof ChangeAvailabilityResponseSchema>;
