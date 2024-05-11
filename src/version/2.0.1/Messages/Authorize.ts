import {z} from 'zod';

export const AuthorizeRequestSchema = z.object({
});

export type AuthorizeRequest = z.infer<typeof AuthorizeRequestSchema>;

export const AuthorizeResponseSchema = z.object({
});

export type AuthorizeResponse = z.infer<typeof AuthorizeResponseSchema>;