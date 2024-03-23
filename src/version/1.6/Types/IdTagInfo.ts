import { z } from 'zod';
import { AuthorizationStatusEnum } from './AuthorizationStatus';
import { IdToken } from './IdToken';

export const IdTagInfoSchema = z.object({
  status: z.nativeEnum(AuthorizationStatusEnum),
  expiryDate: z.date().nullish(),
  parentIdTag: IdToken.nullish(),
});

export type IdTagInfo = z.infer<typeof IdTagInfoSchema>;
