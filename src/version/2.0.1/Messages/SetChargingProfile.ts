import {z} from 'zod';

export const SetChargingProfileRequestSchema = z.object({});

export type SetChargingProfileRequest = z.infer<typeof SetChargingProfileRequestSchema>;

export const SetChargingProfileResponseSchema = z.object({});

export type SetChargingProfileResponse = z.infer<typeof SetChargingProfileResponseSchema>;
