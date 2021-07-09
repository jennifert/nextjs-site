/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import MyApp from '../../pages/_app'

it('should demonstrate this matcher`s usage with react testing library', async () => {
    const { container } = render(<MyApp />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
})