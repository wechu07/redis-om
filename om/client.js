import { Client } from 'redis-om'

/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL

/* create and open the Redis OM Client */
// the .open() method conveniently returns `this`
// chains the instantiation of the client with the opening of the client
const client = await new Client().open(url)
// client.on('connect', function () {
//     console.log('Redis database onnected!');
// }); //redis db connected status

export default client