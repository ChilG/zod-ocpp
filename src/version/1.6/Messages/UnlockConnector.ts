import {z} from 'zod';
import {UnlockStatusEnum} from '../Types/UnlockStatus';

export const UnlockConnectorRequestSchema = z.object({
  connectorId: z.number().min(0),
});

export type UnlockConnectorRequest = z.infer<typeof UnlockConnectorRequestSchema>;

export const UnlockConnectorResponseSchema = z.object({
  status: z.nativeEnum(UnlockStatusEnum),
});

export type UnlockConnectorResponse = z.infer<typeof UnlockConnectorResponseSchema>;
