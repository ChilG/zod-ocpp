import {z} from 'zod';

export const ClearChargingProfileRequestSchema = z.object({});

export type ClearChargingProfileRequest = z.infer<typeof ClearChargingProfileRequestSchema>;

export const ClearChargingProfileResponseSchema = z.object({});

export type ClearChargingProfileResponse = z.infer<typeof ClearChargingProfileResponseSchema>;
