import {z} from 'zod';

export const PublishFirmwareRequestSchema = z.object({});

export type PublishFirmwareRequest = z.infer<typeof PublishFirmwareRequestSchema>;

export const PublishFirmwareResponseSchema = z.object({});

export type PublishFirmwareResponse = z.infer<typeof PublishFirmwareResponseSchema>;
