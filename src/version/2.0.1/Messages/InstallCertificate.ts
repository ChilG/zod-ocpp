import {z} from 'zod';

export const InstallCertificateRequestSchema = z.object({});

export type InstallCertificateRequest = z.infer<typeof InstallCertificateRequestSchema>;

export const InstallCertificateResponseSchema = z.object({});

export type InstallCertificateResponse = z.infer<typeof InstallCertificateResponseSchema>;
