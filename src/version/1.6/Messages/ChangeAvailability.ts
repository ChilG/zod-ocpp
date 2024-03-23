import {z} from 'zod';
import {AvailabilityTypeEnum} from '../Types/AvailabilityType';
import {AvailabilityStatusEnum} from '../Types/AvailabilityStatus';

export const ChangeAvailabilityRequestSchema = z.object({
  connectorId: z.number().min(0),
  type: z.nativeEnum(AvailabilityTypeEnum),
});

export type ChangeAvailabilityRequest = z.infer<typeof ChangeAvailabilityRequestSchema>;

export const ChangeAvailabilityResponseSchema = z.object({
  status: z.nativeEnum(AvailabilityStatusEnum),
});

export type ChangeAvailabilityResponse = z.infer<typeof ChangeAvailabilityResponseSchema>;
