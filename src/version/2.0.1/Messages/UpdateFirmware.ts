import {z} from 'zod';

export const UpdateFirmwareRequestSchema = z.object({
});

export type UpdateFirmwareRequest = z.infer<typeof UpdateFirmwareRequestSchema>;

export const UpdateFirmwareResponseSchema = z.object({
});

export type UpdateFirmwareResponse = z.infer<typeof UpdateFirmwareResponseSchema>;