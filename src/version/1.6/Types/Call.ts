import {z} from 'zod';
import {ActionEnum} from './Action';

export const CallSchema = z.array(z.union([z.literal(2), z.string(), z.nativeEnum(ActionEnum), z.any()]));

export type Call = z.infer<typeof CallSchema>;
