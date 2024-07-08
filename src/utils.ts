import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://postgres:google@localhost/sqldb");
    await client.connect();
    return client;
}