import { Router } from 'express'

import { ExampleController } from './controllers/ExampleController'
import { exampleMiddleware } from './middlewares/exampleMiddleware'

export const router = Router()

// basic route
router.get('/me', exampleMiddleware, new ExampleController().handle)