import {z} from 'zod';

export const GetCertificateStatusRequestSchema = z.object({});

export type GetCertificateStatusRequest = z.infer<typeof GetCertificateStatusRequestSchema>;

export const GetCertificateStatusResponseSchema = z.object({});

export type GetCertificateStatusResponse = z.infer<typeof GetCertificateStatusResponseSchema>;
