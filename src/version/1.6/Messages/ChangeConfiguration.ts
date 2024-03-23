import {z} from 'zod';
import {ConfigurationStatusEnum} from '../Types/ConfigurationStatus';
import {CiString50Type} from '../Types/CiString50Type';
import {CiString500Type} from '../Types/CiString500Type';

export const ChangeConfigurationRequestSchema = z.object({
  key: CiString50Type,
  value: CiString500Type,
});

export type ChangeConfigurationRequest = z.infer<typeof ChangeConfigurationRequestSchema>;

export const ChangeConfigurationResponseSchema = z.object({
  status: z.nativeEnum(ConfigurationStatusEnum),
});

export type ChangeConfigurationResponse = z.infer<typeof ChangeConfigurationResponseSchema>;
