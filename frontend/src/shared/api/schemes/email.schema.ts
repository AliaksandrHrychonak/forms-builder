import { z } from 'zod';

export const emailSchema = z.string().min(1).email();
