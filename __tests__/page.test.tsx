import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import Page from '../app/page'

test('Check if "Get started by editing" is defined', () => {
  render(<Page />)
  expect(screen.getByText('Get started by editing')).toBeDefined()
})
