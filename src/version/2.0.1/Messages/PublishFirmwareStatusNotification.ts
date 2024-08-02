import {z} from 'zod';

export const PublishFirmwareStatusNotificationRequestSchema = z.object({});

export type PublishFirmwareStatusNotificationRequest = z.infer<typeof PublishFirmwareStatusNotificationRequestSchema>;

export const PublishFirmwareStatusNotificationResponseSchema = z.object({});

export type PublishFirmwareStatusNotificationResponse = z.infer<typeof PublishFirmwareStatusNotificationResponseSchema>;
