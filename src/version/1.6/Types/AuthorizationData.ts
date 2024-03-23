import {z} from 'zod';
import {IdToken} from './IdToken';
import {IdTagInfoSchema} from './IdTagInfo';

export const AuthorizationDataSchema = z.object({
  idTag: IdToken,
  idTagInfo: IdTagInfoSchema,
});

export type AuthorizationData = z.infer<typeof AuthorizationDataSchema>;
