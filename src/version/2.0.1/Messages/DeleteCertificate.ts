import {z} from 'zod';

export const DeleteCertificateRequestSchema = z.object({
});

export type DeleteCertificateRequest = z.infer<typeof DeleteCertificateRequestSchema>;

export const DeleteCertificateResponseSchema = z.object({
});

export type DeleteCertificateResponse = z.infer<typeof DeleteCertificateResponseSchema>;