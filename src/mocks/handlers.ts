import { rest } from 'msw'
import { v4 as uuid } from 'uuid'

const episodes = [
  {
    id: uuid(),
    name: 'First episode',
    description: 'Launching our podcast',
  },
  {
    id: uuid(),
    name: 'Second episode',
    description: 'That tricky second album',
  },
]

interface NewEpisodeRequestBody {
  name: string
  description?: string
}

export const handlers = [
  rest.get('/api/episodes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(episodes))
  }),

  rest.get('/api/episode/:id', (req, res, ctx) => {
    const { id } = req.params
    return res(ctx.status(200), ctx.json(episodes.find((e) => e.id == id)))
  }),

  rest.post('/api/episode/new', (req, res, ctx) => {
    const { name, description } = req.body as NewEpisodeRequestBody
    const newEpisode = {
      id: uuid(),
      name: name,
      description: description === undefined ? '' : description,
    }
    episodes.push(newEpisode)
    return res(ctx.status(200), ctx.json(newEpisode.id))
  }),
]
