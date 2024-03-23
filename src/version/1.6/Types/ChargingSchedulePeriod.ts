import {z} from 'zod';

export const ChargingSchedulePeriodSchema = z.object({
  startPeriod: z.number(),
  limit: z.number(),
  numberPhases: z.number().nullish(),
});

export type ChargingSchedulePeriod = z.infer<typeof ChargingSchedulePeriodSchema>;
