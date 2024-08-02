import {z} from 'zod';

export const GetInstalledCertificateIdsRequestSchema = z.object({});

export type GetInstalledCertificateIdsRequest = z.infer<typeof GetInstalledCertificateIdsRequestSchema>;

export const GetInstalledCertificateIdsResponseSchema = z.object({});

export type GetInstalledCertificateIdsResponse = z.infer<typeof GetInstalledCertificateIdsResponseSchema>;
