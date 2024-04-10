import {z} from 'zod';
import {ChargingScheduleSchema} from '../Types/ChargingSchedule';
import {ChargingRateUnitTypeEnum} from '../Types/ChargingRateUnitType';
import {GetCompositeScheduleStatusEnum} from '../Types/GetCompositeScheduleStatus';

export const GetCompositeScheduleRequestSchema = z.object({
  connectorId: z.number(),
  duration: z.number(),
  chargingRateUnit: z.nativeEnum(ChargingRateUnitTypeEnum).nullish(),
});

export type GetCompositeScheduleRequest = z.infer<typeof GetCompositeScheduleRequestSchema>;

export const GetCompositeScheduleResponseSchema = z.object({
  status: z.nativeEnum(GetCompositeScheduleStatusEnum),
  connectorId: z.number().nullish(),
  scheduleStart: z.string().datetime({offset: true}).nullish(),
  chargingSchedule: ChargingScheduleSchema.nullish(),
});

export type GetCompositeScheduleResponse = z.infer<typeof GetCompositeScheduleResponseSchema>;
