import {z} from 'zod';

export const HeartbeatRequestSchema = z.object({});

export type HeartbeatRequest = z.infer<typeof HeartbeatRequestSchema>;

export const HeartbeatResponseSchema = z.object({
  currentTime: z.string().datetime(),
});

export type HeartbeatResponse = z.infer<typeof HeartbeatResponseSchema>;
