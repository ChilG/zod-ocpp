import {z} from 'zod';
import {ErrorCodeEnum} from './ErrorCode';

export const CallErrorSchema = z.tuple([
  z.custom<number>((val) => {
    return val === 4;
  }),
  z.string(),
  z.nativeEnum(ErrorCodeEnum),
  z.string(),
  z.any(),
]);

export type CallError = z.infer<typeof CallErrorSchema>;
