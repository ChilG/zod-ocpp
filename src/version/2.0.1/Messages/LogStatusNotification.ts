import {z} from 'zod';

export const LogStatusNotificationRequestSchema = z.object({});

export type LogStatusNotificationRequest = z.infer<typeof LogStatusNotificationRequestSchema>;

export const LogStatusNotificationResponseSchema = z.object({});

export type LogStatusNotificationResponse = z.infer<typeof LogStatusNotificationResponseSchema>;
