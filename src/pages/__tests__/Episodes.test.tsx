import Episodes from '../Episodes'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import server from '../../setupTests'
import { rest } from 'msw'

describe('Episodes page', () => {
  test('renders an episode', async () => {
    act(() => {
      render(<Episodes />)
    })

    expect(screen.getByText(/Episodes/i)).toBeInTheDocument()

    expect(await screen.findByText(/first episode/i)).toBeInTheDocument()
  })

  test('has an add episode button', async () => {
    act(() => {
      render(<Episodes />)
    })

    expect(screen.getByText(/Add new episode/i)).toBeInTheDocument()
  })

  test('new episode popup is hidden until button pressed', async () => {
    act(() => {
      render(<Episodes />)
    })

    expect(screen.queryByText(/Create episode/i)).not.toBeInTheDocument()
  })

  test('clicking new episode button shows popup', async () => {
    act(() => {
      render(<Episodes />)
      fireEvent.click(screen.getByText('Add new episode'))
    })

    expect(screen.queryByText(/Create episode/i)).toBeInTheDocument()
  })
})
