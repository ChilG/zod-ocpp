import {z} from 'zod';
import {MeterValueSchema} from '../Types/MeterValue';

export const MeterValuesRequestSchema = z.object({
  connectorId: z.number().min(0),
  transactionId: z.number().nullish(),
  meterValue: z.array(MeterValueSchema),
});

export type MeterValuesRequest = z.infer<typeof MeterValuesRequestSchema>;

export const MeterValuesResponseSchema = z.object({});

export type MeterValuesResponse = z.infer<typeof MeterValuesResponseSchema>;
