import {z} from 'zod';

export const CostUpdatedRequestSchema = z.object({});

export type CostUpdatedRequest = z.infer<typeof CostUpdatedRequestSchema>;

export const CostUpdatedResponseSchema = z.object({});

export type CostUpdatedResponse = z.infer<typeof CostUpdatedResponseSchema>;
