import {z} from 'zod';

export const CiString500Type = z.string().max(500);
