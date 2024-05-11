import {z} from 'zod';

export const NotifyEVChargingNeedsRequestSchema = z.object({
});

export type NotifyEVChargingNeedsRequest = z.infer<typeof NotifyEVChargingNeedsRequestSchema>;

export const NotifyEVChargingNeedsResponseSchema = z.object({
});

export type NotifyEVChargingNeedsResponse = z.infer<typeof NotifyEVChargingNeedsResponseSchema>;