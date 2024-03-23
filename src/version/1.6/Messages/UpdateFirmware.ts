import { z } from 'zod';

export const UpdateFirmwareRequestSchema = z.object({
  location: z.string(),
  retries: z.number().nullish(),
  retrieveDate: z.date(),
  retryInterval: z.number().nullish(),
});

export type UpdateFirmwareRequest = z.infer<typeof UpdateFirmwareRequestSchema>;

export const UpdateFirmwareResponseSchema = z.object({});

export type UpdateFirmwareResponse = z.infer<typeof UpdateFirmwareResponseSchema>;
