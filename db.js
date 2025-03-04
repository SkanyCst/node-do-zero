import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do .env

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

export { sql };
