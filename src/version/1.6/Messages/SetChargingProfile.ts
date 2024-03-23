import {z} from 'zod';
import {ChargingProfileSchema} from '../Types/ChargingProfile';
import {ChargingProfileStatusEnum} from '../Types/ChargingProfileStatus';

export const SetChargingProfileRequestSchema = z.object({
  connectorId: z.number(),
  csChargingProfiles: ChargingProfileSchema,
});

export type SetChargingProfileRequest = z.infer<typeof SetChargingProfileRequestSchema>;

export const SetChargingProfileResponseSchema = z.object({
  status: z.nativeEnum(ChargingProfileStatusEnum),
});

export type SetChargingProfileResponse = z.infer<typeof SetChargingProfileResponseSchema>;
