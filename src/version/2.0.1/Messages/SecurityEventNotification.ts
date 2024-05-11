import {z} from 'zod';

export const SecurityEventNotificationRequestSchema = z.object({
});

export type SecurityEventNotificationRequest = z.infer<typeof SecurityEventNotificationRequestSchema>;

export const SecurityEventNotificationResponseSchema = z.object({
});

export type SecurityEventNotificationResponse = z.infer<typeof SecurityEventNotificationResponseSchema>;