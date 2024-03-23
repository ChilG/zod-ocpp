import {z} from 'zod';
import {IdTagInfoSchema} from '../Types/IdTagInfo';
import {IdToken} from '../Types/IdToken';

export const AuthorizeRequestSchema = z.object({
  idTag: IdToken,
});

export type AuthorizeRequest = z.infer<typeof AuthorizeRequestSchema>;

export const AuthorizeResponseSchema = z.object({
  idTagInfo: IdTagInfoSchema,
});

export type AuthorizeResponse = z.infer<typeof AuthorizeResponseSchema>;
