import {z} from 'zod';

export const NotifyCustomerInformationRequestSchema = z.object({
});

export type NotifyCustomerInformationRequest = z.infer<typeof NotifyCustomerInformationRequestSchema>;

export const NotifyCustomerInformationResponseSchema = z.object({
});

export type NotifyCustomerInformationResponse = z.infer<typeof NotifyCustomerInformationResponseSchema>;