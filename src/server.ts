import express from 'express'

import { Router, Request, Response } from 'express';

const app = express()

const route = Router()

app.use(express.json())

route.get('/snickerin', (req: Request, res: Response) => {
  res.json({ message: 'Initial Tests' })
})

app.use(route)

const PORT = 3030

app.listen(PORT, () => `Server running on port ${PORT}`)