import 'dotenv';
import { z } from 'zod';
import { typeError } from '../error/error';



const envScheama = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(4000)
})

const _env = envScheama.safeParse(process.env)

if(_env.success == false){
    console.error('Invalid envoirement variables', _env.error.format())
    throw new typeError('Invalid variables')
}

export const env = _env.data
