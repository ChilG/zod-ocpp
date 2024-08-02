import {z} from 'zod';

export const ClearCacheRequestSchema = z.object({});

export type ClearCacheRequest = z.infer<typeof ClearCacheRequestSchema>;

export const ClearCacheResponseSchema = z.object({});

export type ClearCacheResponse = z.infer<typeof ClearCacheResponseSchema>;
