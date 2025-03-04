import { sql } from './db.js'

/*
sql`DROP TABLE IF EXISTS videos;`.then (() =>{
    console.log('Tabela apagada!')
})
*/

sql`
CREATE TABLE videos (
    id              TEXT PRIMARY KEY,
    title           TEXT,   
    description     TEXT,
    duration        INTEGER
);

`.then(() => {
    console.log('Tabela criada!')
})

/*
import { sql } from './db.js';

async function createTable() {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS videos (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,   
                description TEXT,
                duration INTEGER NOT NULL
            );
        `;
        await sql.unsafe(query);
        console.log('Tabela criada com sucesso!');
    } catch (error) {
        console.error('Erro ao criar a tabela:', error);
    }
}

createTable();
*/