import {z} from 'zod';

export const CertificateSignedRequestSchema = z.object({});

export type CertificateSignedRequest = z.infer<typeof CertificateSignedRequestSchema>;

export const CertificateSignedResponseSchema = z.object({});

export type CertificateSignedResponse = z.infer<typeof CertificateSignedResponseSchema>;
