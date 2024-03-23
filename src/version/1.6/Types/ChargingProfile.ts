import {z} from 'zod';
import {ChargingProfilePurposeTypeEnum} from './ChargingProfilePurposeType';
import {ChargingProfileKindEnum} from './ChargingProfileKindType';
import {ChargingScheduleSchema} from './ChargingSchedule';
import {RecurrencyKindTypeEnum} from './RecurrencyKindType';

export const ChargingProfileSchema = z.object({
  chargingProfileId: z.number(),
  transactionId: z.number().nullish(),
  stackLevel: z.number().min(0),
  chargingProfilePurpose: z.nativeEnum(ChargingProfilePurposeTypeEnum),
  chargingProfileKind: z.nativeEnum(ChargingProfileKindEnum),
  recurrencyKind: z.nativeEnum(RecurrencyKindTypeEnum).nullish(),
  validFrom: z.date().nullish(),
  validTo: z.date().nullish(),
  chargingSchedule: ChargingScheduleSchema,
});

export type ChargingProfile = z.infer<typeof ChargingProfileSchema>;
