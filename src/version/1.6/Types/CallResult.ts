import {z} from 'zod';

export const CallResultSchema = z.tuple([
  z.custom<number>((val) => {
    return val === 3;
  }),
  z.string(),
  z.any(),
]);

export type CallResult = z.infer<typeof CallResultSchema>;
