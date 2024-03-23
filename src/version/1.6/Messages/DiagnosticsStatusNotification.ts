import {z} from 'zod';
import {DiagnosticsStatusEnum} from '../Types/DiagnosticsStatus';

export const DiagnosticsStatusNotificationRequestSchema = z.object({
  status: z.nativeEnum(DiagnosticsStatusEnum),
});

export type DiagnosticsStatusNotificationRequest = z.infer<typeof DiagnosticsStatusNotificationRequestSchema>;

export const DiagnosticsStatusNotificationResponseSchema = z.object({});

export type DiagnosticsStatusNotificationResponse = z.infer<typeof DiagnosticsStatusNotificationResponseSchema>;
