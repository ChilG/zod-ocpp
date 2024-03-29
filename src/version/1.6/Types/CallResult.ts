import {z} from 'zod';

export const CallResultSchema = z.array(z.union([z.literal(3), z.string(), z.any()]));

export type CallResult = z.infer<typeof CallResultSchema>;
