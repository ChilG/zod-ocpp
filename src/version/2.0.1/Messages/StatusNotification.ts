import {z} from 'zod';

export const StatusNotificationRequestSchema = z.object({
});

export type StatusNotificationRequest = z.infer<typeof StatusNotificationRequestSchema>;

export const StatusNotificationResponseSchema = z.object({
});

export type StatusNotificationResponse = z.infer<typeof StatusNotificationResponseSchema>;