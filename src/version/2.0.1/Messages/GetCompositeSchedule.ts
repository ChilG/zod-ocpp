import {z} from 'zod';

export const GetCompositeScheduleRequestSchema = z.object({});

export type GetCompositeScheduleRequest = z.infer<typeof GetCompositeScheduleRequestSchema>;

export const GetCompositeScheduleResponseSchema = z.object({});

export type GetCompositeScheduleResponse = z.infer<typeof GetCompositeScheduleResponseSchema>;
