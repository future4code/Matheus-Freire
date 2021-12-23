import { connection } from "./connection"

export default async function selectAllUsers(nome:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name="${nome}" OR type=;
    `)
 
    return result[0]
 }

