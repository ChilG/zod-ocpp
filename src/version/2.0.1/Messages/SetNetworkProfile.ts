import {z} from 'zod';

export const SetNetworkProfileRequestSchema = z.object({});

export type SetNetworkProfileRequest = z.infer<typeof SetNetworkProfileRequestSchema>;

export const SetNetworkProfileResponseSchema = z.object({});

export type SetNetworkProfileResponse = z.infer<typeof SetNetworkProfileResponseSchema>;
