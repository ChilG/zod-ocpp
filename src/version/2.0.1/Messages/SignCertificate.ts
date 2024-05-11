import {z} from 'zod';

export const SignCertificateRequestSchema = z.object({
});

export type SignCertificateRequest = z.infer<typeof SignCertificateRequestSchema>;

export const SignCertificateResponseSchema = z.object({
});

export type SignCertificateResponse = z.infer<typeof SignCertificateResponseSchema>;