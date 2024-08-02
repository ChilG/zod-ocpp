import {z} from 'zod';

export const ClearedChargingLimitRequestSchema = z.object({});

export type ClearedChargingLimitRequest = z.infer<typeof ClearedChargingLimitRequestSchema>;

export const ClearedChargingLimitResponseSchema = z.object({});

export type ClearedChargingLimitResponse = z.infer<typeof ClearedChargingLimitResponseSchema>;
