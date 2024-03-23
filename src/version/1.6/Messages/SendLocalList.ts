import { z } from 'zod';
import { AuthorizationDataSchema } from '../Types/AuthorizationData';
import { UpdateTypeEnum } from '../Types/UpdateType';
import { UpdateStatusEnum } from '../Types/UpdateStatus';

export const SendLocalListRequestSchema = z.object({
  listVersion: z.number(),
  localAuthorizationList: z.array(AuthorizationDataSchema),
  updateType: z.nativeEnum(UpdateTypeEnum),
});

export type SendLocalListRequest = z.infer<typeof SendLocalListRequestSchema>;

export const SendLocalListResponseSchema = z.object({
  status: z.nativeEnum(UpdateStatusEnum),
});

export type SendLocalListResponse = z.infer<typeof SendLocalListResponseSchema>;
