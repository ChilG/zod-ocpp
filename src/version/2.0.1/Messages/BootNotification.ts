import {z} from 'zod';

export const BootNotificationRequestSchema = z.object({
});

export type BootNotificationRequest = z.infer<typeof BootNotificationRequestSchema>;

export const BootNotificationResponseSchema = z.object({
});

export type BootNotificationResponse = z.infer<typeof BootNotificationResponseSchema>;