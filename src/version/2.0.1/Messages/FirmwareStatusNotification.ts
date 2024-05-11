import {z} from 'zod';

export const FirmwareStatusNotificationRequestSchema = z.object({
});

export type FirmwareStatusNotificationRequest = z.infer<typeof FirmwareStatusNotificationRequestSchema>;

export const FirmwareStatusNotificationResponseSchema = z.object({
});

export type FirmwareStatusNotificationResponse = z.infer<typeof FirmwareStatusNotificationResponseSchema>;