import {z} from 'zod';

export const NotifyChargingLimitRequestSchema = z.object({
});

export type NotifyChargingLimitRequest = z.infer<typeof NotifyChargingLimitRequestSchema>;

export const NotifyChargingLimitResponseSchema = z.object({
});

export type NotifyChargingLimitResponse = z.infer<typeof NotifyChargingLimitResponseSchema>;