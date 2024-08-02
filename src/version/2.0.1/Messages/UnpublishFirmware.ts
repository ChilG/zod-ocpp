import {z} from 'zod';

export const UnpublishFirmwareRequestSchema = z.object({});

export type UnpublishFirmwareRequest = z.infer<typeof UnpublishFirmwareRequestSchema>;

export const UnpublishFirmwareResponseSchema = z.object({});

export type UnpublishFirmwareResponse = z.infer<typeof UnpublishFirmwareResponseSchema>;
