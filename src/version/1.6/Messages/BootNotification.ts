import {z} from 'zod';
import {RegistrationStatusEnum} from '../Types/RegistrationStatus';
import {CiString20Type} from '../Types/CiString20Type';
import {CiString25Type} from '../Types/CiString25Type';
import {CiString50Type} from '../Types/CiString50Type';

export const BootNotificationRequestSchema = z.object({
  chargePointVendor: CiString25Type,
  chargePointModel: CiString20Type,
  chargePointSerialNumber: CiString25Type.nullish(),
  chargeBoxSerialNumber: CiString20Type.nullish(),
  firmwareVersion: CiString50Type.nullish(),
  iccid: CiString20Type.nullish(),
  imsi: CiString20Type.nullish(),
  meterType: CiString25Type.nullish(),
  meterSerialNumber: CiString25Type.nullish(),
});

export type BootNotificationRequest = z.infer<typeof BootNotificationRequestSchema>;

export const BootNotificationResponseSchema = z.object({
  status: z.nativeEnum(RegistrationStatusEnum),
  currentTime: z.string().datetime({offset: true}),
  interval: z.number(),
});

export type BootNotificationResponse = z.infer<typeof BootNotificationResponseSchema>;
