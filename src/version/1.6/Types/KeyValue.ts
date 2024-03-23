import {z} from 'zod';

export const KeyValueSchema = z.object({
  key: z.string().max(50),
  readonly: z.boolean(),
  value: z.string().nullish(),
});

export type KeyValue = z.infer<typeof KeyValueSchema>;
