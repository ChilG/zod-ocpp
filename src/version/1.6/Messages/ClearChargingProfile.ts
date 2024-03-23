import { z } from 'zod';
import { ChargingProfilePurposeTypeEnum } from '../Types/ChargingProfilePurposeType';
import { ClearChargingProfileStatusEnum } from '../Types/ClearChargingProfileStatus';

export const ClearChargingProfileRequestSchema = z.object({
  id: z.number(),
  connectorId: z.number(),
  chargingProfilePurpose: z.nativeEnum(ChargingProfilePurposeTypeEnum),
  stackLevel: z.number(),
});

export type ClearChargingProfileRequest = z.infer<typeof ClearChargingProfileRequestSchema>;

export const ClearChargingProfileResponseSchema = z.object({
  status: z.nativeEnum(ClearChargingProfileStatusEnum),
});

export type ClearChargingProfileResponse = z.infer<typeof ClearChargingProfileResponseSchema>;
