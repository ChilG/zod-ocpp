import {z} from 'zod';
import {SampledValueSchema} from './SampledValue';

export const MeterValueSchema = z.object({
  timestamp: z.string().datetime({offset: true}),
  sampledValue: z.array(SampledValueSchema),
});

export type MeterValue = z.infer<typeof MeterValueSchema>;
