import {z} from 'zod';
import {DataTransferStatusEnum} from '../Types/DataTransferStatus';
import {CiString255Type} from '../Types/CiString255Type';
import {CiString50Type} from '../Types/CiString50Type';

export const DataTransferRequestSchema = z.object({
  vendorId: CiString255Type,
  messageId: CiString50Type.nullish(),
  data: z.string().nullish(),
});

export type DataTransferRequest = z.infer<typeof DataTransferRequestSchema>;

export const DataTransferResponseSchema = z.object({
  status: z.nativeEnum(DataTransferStatusEnum),
  data: z.string().nullish(),
});

export type DataTransferResponse = z.infer<typeof DataTransferResponseSchema>;
