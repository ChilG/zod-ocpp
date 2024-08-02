import {z} from 'zod';
import {ChargingSchedulePeriodSchema} from './ChargingSchedulePeriod';
import {ChargingRateUnitTypeEnum} from './ChargingRateUnitType';

export const ChargingScheduleSchema = z.object({
  duration: z.number().nullish(),
  startSchedule: z.string().datetime({offset: true}).nullish(),
  chargingRateUnit: z.nativeEnum(ChargingRateUnitTypeEnum),
  chargingSchedulePeriod: z.array(ChargingSchedulePeriodSchema),
  minChargingRate: z.number().nullish(),
});

export type ChargingSchedule = z.infer<typeof ChargingScheduleSchema>;
