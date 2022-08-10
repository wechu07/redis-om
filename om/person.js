import { Entity, Schema } from 'redis-om'
import client from './client.js'

// An Entity is the class that holds you data when you work with it—the thing being mapped to.
// It is what you create, read, update, and delete. 

/* our entity */
class Person extends Entity {}

// Any class that extends Entity is an entity
// In this case, we have defineed Person entity

// A schema defines the fields on your entity, their types, and how they are mapped internally to Redis
// By default, entities map to JSON documents

/* create a Schema for Person */
const personSchema = new Schema(Person, {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    age: { type: 'number' },
    verified: { type: 'boolean' },
    location: { type: 'point' },
    locationUpdated: { type: 'date' },
    skills: { type: 'string[]' },
    personalStatement: { type: 'text' }
  })

// Valid values are: string, number, boolean, string[], date, point, and text.

/* use the client to create a Repository just for Persons */
export const personRepository = client.fetchRepository(personSchema)

// A Repository is the main interface into Redis OM. 
// It gives us the methods to read, write, and remove a specific Entity.


/* create the index for Person */
// If an index already exists and it's identical, this function won't do anything
// otherwise, create an index or we won't be able to search
await personRepository.createIndex()
