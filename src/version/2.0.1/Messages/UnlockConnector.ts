import {z} from 'zod';

export const UnlockConnectorRequestSchema = z.object({
});

export type UnlockConnectorRequest = z.infer<typeof UnlockConnectorRequestSchema>;

export const UnlockConnectorResponseSchema = z.object({
});

export type UnlockConnectorResponse = z.infer<typeof UnlockConnectorResponseSchema>;