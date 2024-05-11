import {z} from 'zod';

export const SetVariablesRequestSchema = z.object({
});

export type SetVariablesRequest = z.infer<typeof SetVariablesRequestSchema>;

export const SetVariablesResponseSchema = z.object({
});

export type SetVariablesResponse = z.infer<typeof SetVariablesResponseSchema>;