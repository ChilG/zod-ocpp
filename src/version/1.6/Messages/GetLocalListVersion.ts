import {z} from 'zod';

export const GetLocalListVersionRequestSchema = z.object({});

export type GetLocalListVersionRequest = z.infer<typeof GetLocalListVersionRequestSchema>;

export const GetLocalListVersionResponseSchema = z.object({
  listVersion: z.number(),
});

export type GetLocalListVersionResponse = z.infer<typeof GetLocalListVersionResponseSchema>;
