import {z} from 'zod';
import {ReadingContextEnum} from './ReadingContext';
import {ValueFormatEnum} from './ValueFormat';
import {MeasurandEnum} from './Measurand';
import {PhaseEnum} from './Phase';
import {LocationEnum} from './Location';
import {UnitOfMeasureEnum} from './UnitOfMeasure';

export const SampledValueSchema = z.object({
  value: z.string(),
  context: z.nativeEnum(ReadingContextEnum).nullish(),
  format: z.nativeEnum(ValueFormatEnum).nullish(),
  measurand: z.nativeEnum(MeasurandEnum).nullish(),
  phase: z.nativeEnum(PhaseEnum).nullish(),
  location: z.nativeEnum(LocationEnum).nullish(),
  unit: z.nativeEnum(UnitOfMeasureEnum).nullish(),
});

export type SampledValue = z.infer<typeof SampledValueSchema>;
