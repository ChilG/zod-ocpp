import {z} from 'zod';

export const GetChargingProfilesRequestSchema = z.object({});

export type GetChargingProfilesRequest = z.infer<typeof GetChargingProfilesRequestSchema>;

export const GetChargingProfilesResponseSchema = z.object({});

export type GetChargingProfilesResponse = z.infer<typeof GetChargingProfilesResponseSchema>;
