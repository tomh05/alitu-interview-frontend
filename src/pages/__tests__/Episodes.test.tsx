import Episodes from '../Episodes'
import { render, screen } from '@testing-library/react';

describe('Episodes page', () => {
  test('renders an episode', async () => {
    render(<Episodes />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
    expect(await screen.findByText(/first episode/i)).toBeInTheDocument()
  })
})