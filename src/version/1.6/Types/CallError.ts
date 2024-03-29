import {z} from 'zod';
import {ErrorCodeEnum} from './ErrorCode';

export const CallErrorSchema = z.array(
  z.union([z.literal(4), z.string(), z.nativeEnum(ErrorCodeEnum), z.string(), z.any()])
);

export type CallError = z.infer<typeof CallErrorSchema>;
