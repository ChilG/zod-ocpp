import { z } from 'zod';
import { ResetTypeEnum } from '../Types/ResetType';
import { ResetStatusEnum } from '../Types/ResetStatus';

export const ResetRequestSchema = z.object({
  type: z.nativeEnum(ResetTypeEnum),
});

export type ResetRequest = z.infer<typeof ResetRequestSchema>;

export const ResetResponseSchema = z.object({
  status: z.nativeEnum(ResetStatusEnum),
});

export type ResetResponse = z.infer<typeof ResetResponseSchema>;
