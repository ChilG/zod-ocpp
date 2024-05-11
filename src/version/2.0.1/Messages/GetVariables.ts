import {z} from 'zod';

export const GetVariablesRequestSchema = z.object({
});

export type GetVariablesRequest = z.infer<typeof GetVariablesRequestSchema>;

export const GetVariablesResponseSchema = z.object({
});

export type GetVariablesResponse = z.infer<typeof GetVariablesResponseSchema>;