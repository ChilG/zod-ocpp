import {z} from 'zod';
import {ChargePointErrorCodeEnum} from '../Types/ChargePointErrorCode';
import {CiString50Type} from '../Types/CiString50Type';
import {ChargePointStatusEnum} from '../Types/ChargePointStatus';
import {CiString255Type} from '../Types/CiString255Type';

export const StatusNotificationRequestSchema = z.object({
  connectorId: z.number().min(0),
  errorCode: z.nativeEnum(ChargePointErrorCodeEnum),
  info: CiString50Type.nullish(),
  status: z.nativeEnum(ChargePointStatusEnum),
  timestamp: z.string().datetime({offset: true}).nullish(),
  vendorId: CiString255Type.nullish(),
  vendorErrorCode: CiString50Type.nullish(),
});

export type StatusNotificationRequest = z.infer<typeof StatusNotificationRequestSchema>;

export const StatusNotificationResponseSchema = z.object({});

export type StatusNotificationResponse = z.infer<typeof StatusNotificationResponseSchema>;
