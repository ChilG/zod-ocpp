import {z} from 'zod';
import {ReadingContextEnum} from './ReadingContext';
import {ValueFormatEnum} from './ValueFormat';
import {MeasurandEnum} from './Measurand';
import {PhaseEnum} from './Phase';
import {LocationEnum} from './Location';
import {UnitOfMeasureEnum} from './UnitOfMeasure';

export const SampledValueSchema = z.object({
  value: z.string(),
  context: z.nativeEnum(ReadingContextEnum),
  format: z.nativeEnum(ValueFormatEnum),
  measurand: z.nativeEnum(MeasurandEnum),
  phase: z.nativeEnum(PhaseEnum).nullish(),
  location: z.nativeEnum(LocationEnum),
  unit: z.nativeEnum(UnitOfMeasureEnum),
});

export type SampledValue = z.infer<typeof SampledValueSchema>;
