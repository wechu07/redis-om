import { Client } from 'redis-om'
import { createClient } from 'redis'

/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL

/* create a connection to Redis with Node Redis */
export const connection = createClient({ url })
await connection.connect()

/* create and open the Redis OM Client */
// the .open() method conveniently returns `this`
// chains the instantiation of the client with the opening of the client


/* create a Client and bind it to the Node Redis connection */
const client = await new Client().use(connection)
client.on('error', (err) => console.error(err))
// client.on('connect', function () {
//     console.log('Redis database onnected!');
// }); //redis db connected status

export default client