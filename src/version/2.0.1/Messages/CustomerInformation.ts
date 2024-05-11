import {z} from 'zod';

export const CustomerInformationRequestSchema = z.object({
});

export type CustomerInformationRequest = z.infer<typeof CustomerInformationRequestSchema>;

export const CustomerInformationResponseSchema = z.object({
});

export type CustomerInformationResponse = z.infer<typeof CustomerInformationResponseSchema>;