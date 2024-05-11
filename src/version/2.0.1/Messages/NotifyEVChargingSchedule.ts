import {z} from 'zod';

export const NotifyEVChargingScheduleRequestSchema = z.object({
});

export type NotifyEVChargingScheduleRequest = z.infer<typeof NotifyEVChargingScheduleRequestSchema>;

export const NotifyEVChargingScheduleResponseSchema = z.object({
});

export type NotifyEVChargingScheduleResponse = z.infer<typeof NotifyEVChargingScheduleResponseSchema>;