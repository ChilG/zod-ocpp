import {z} from 'zod';
import {KeyValueSchema} from '../Types/KeyValue';
import {CiString50Type} from '../Types/CiString50Type';

export const GetConfigurationRequestSchema = z.object({
  key: z.array(CiString50Type),
});

export type GetConfigurationRequest = z.infer<typeof GetConfigurationRequestSchema>;

export const GetConfigurationResponseSchema = z.object({
  configurationKey: z.array(KeyValueSchema),
  unknownKey: z.array(CiString50Type),
});

export type GetConfigurationResponse = z.infer<typeof GetConfigurationResponseSchema>;
