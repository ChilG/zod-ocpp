import {z} from 'zod';
import {MessageTriggerEnum} from '../Types/MessageTrigger';
import {TriggerMessageStatusEnum} from '../Types/TriggerMessageStatus';

export const TriggerMessageRequestSchema = z.object({
  requestedMessage: z.nativeEnum(MessageTriggerEnum),
  connectorId: z.number().min(0).nullish(),
});

export type TriggerMessageRequest = z.infer<typeof TriggerMessageRequestSchema>;

export const TriggerMessageResponseSchema = z.object({
  status: z.nativeEnum(TriggerMessageStatusEnum),
});

export type TriggerMessageResponse = z.infer<typeof TriggerMessageResponseSchema>;
