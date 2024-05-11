import {z} from 'zod';

export const ReportChargingProfilesRequestSchema = z.object({
});

export type ReportChargingProfilesRequest = z.infer<typeof ReportChargingProfilesRequestSchema>;

export const ReportChargingProfilesResponseSchema = z.object({
});

export type ReportChargingProfilesResponse = z.infer<typeof ReportChargingProfilesResponseSchema>;