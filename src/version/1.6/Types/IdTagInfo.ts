import {z} from 'zod';
import {AuthorizationStatusEnum} from './AuthorizationStatus';
import {IdToken} from './IdToken';

export const IdTagInfoSchema = z.object({
  status: z.nativeEnum(AuthorizationStatusEnum),
  expiryDate: z.string().datetime({offset: true}).nullish(),
  parentIdTag: IdToken.nullish(),
});

export type IdTagInfo = z.infer<typeof IdTagInfoSchema>;
