import {z} from 'zod';
import {UpdateTypeEnum} from '../Types/UpdateType';
import {UpdateStatusEnum} from '../Types/UpdateStatus';
import {IdToken} from '../Types/IdToken';
import {IdTagInfoSchema} from '../Types/IdTagInfo';

export const SendLocalListRequestSchema = z.object({
  listVersion: z.number(),
  localAuthorizationList: z.array(
    z.object({
      idTag: IdToken,
      idTagInfo: IdTagInfoSchema.nullish(),
    })
  ),
  updateType: z.nativeEnum(UpdateTypeEnum),
});

export type SendLocalListRequest = z.infer<typeof SendLocalListRequestSchema>;

export const SendLocalListResponseSchema = z.object({
  status: z.nativeEnum(UpdateStatusEnum),
});

export type SendLocalListResponse = z.infer<typeof SendLocalListResponseSchema>;
