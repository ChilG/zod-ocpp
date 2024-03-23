import {z} from 'zod';
import {FirmwareStatusEnum} from '../Types/FirmwareStatus';

export const FirmwareStatusNotificationRequestSchema = z.object({
  status: z.nativeEnum(FirmwareStatusEnum),
});

export type FirmwareStatusNotificationRequest = z.infer<typeof FirmwareStatusNotificationRequestSchema>;

export const FirmwareStatusNotificationResponseSchema = z.object({});

export type FirmwareStatusNotificationResponse = z.infer<typeof FirmwareStatusNotificationResponseSchema>;
