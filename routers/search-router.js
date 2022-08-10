import { Router } from 'express'
import { personRepository } from '../om/person.js'

export const router = Router()

router.get('/all', async (req, res) => {
    const persons = await personRepository.search().return.all()
    res.send(persons)
  })

router.get('/by-last-name/:lastName', async (req, res) => {
    const lastName = req.params.lastName
    const persons = await personRepository.search()
      .where('lastName').equals(lastName).return.all()
    res.send(persons)
  })

  // https://redis.io/docs/stack/get-started/tutorials/stack-node/#search-all-the-things