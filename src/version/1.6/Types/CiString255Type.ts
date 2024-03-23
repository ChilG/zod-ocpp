import {z} from 'zod';

export const CiString255Type = z.string().max(255);
