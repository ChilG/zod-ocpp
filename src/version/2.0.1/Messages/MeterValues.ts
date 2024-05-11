import {z} from 'zod';

export const MeterValuesRequestSchema = z.object({
});

export type MeterValuesRequest = z.infer<typeof MeterValuesRequestSchema>;

export const MeterValuesResponseSchema = z.object({
});

export type MeterValuesResponse = z.infer<typeof MeterValuesResponseSchema>;