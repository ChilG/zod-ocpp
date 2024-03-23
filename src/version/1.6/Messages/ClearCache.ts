import {z} from 'zod';
import {ClearCacheStatusEnum} from '../Types/ClearCacheStatus';

export const ClearCacheRequestSchema = z.object({});

export type ClearCacheRequest = z.infer<typeof ClearCacheRequestSchema>;

export const ClearCacheResponseSchema = z.object({
  status: z.nativeEnum(ClearCacheStatusEnum),
});

export type ClearCacheResponse = z.infer<typeof ClearCacheResponseSchema>;
