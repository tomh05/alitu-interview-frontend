import { rest } from 'msw'
import { v4 as uuid } from 'uuid'

export const handlers = [
  rest.get('/api/episodes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: uuid(),
          name: 'First episode',
          description: 'Launching our podcast'
        }
      ]),
    )
  }),
]