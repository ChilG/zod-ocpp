import {z} from 'zod';
import {ChargingProfilePurposeTypeEnum} from '../Types/ChargingProfilePurposeType';
import {ClearChargingProfileStatusEnum} from '../Types/ClearChargingProfileStatus';

export const ClearChargingProfileRequestSchema = z.object({
  id: z.number().nullish(),
  connectorId: z.number().nullish(),
  chargingProfilePurpose: z.nativeEnum(ChargingProfilePurposeTypeEnum).nullish(),
  stackLevel: z.number().nullish(),
});

export type ClearChargingProfileRequest = z.infer<typeof ClearChargingProfileRequestSchema>;

export const ClearChargingProfileResponseSchema = z.object({
  status: z.nativeEnum(ClearChargingProfileStatusEnum),
});

export type ClearChargingProfileResponse = z.infer<typeof ClearChargingProfileResponseSchema>;
