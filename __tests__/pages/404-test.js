/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import Custom404 from '../../pages/404'

test('renders skip link', () => {
    const { getByText } = render(<Custom404 />)
    const linkElement = getByText(
        /Skip to main content/
    )
    expect(linkElement).toBeInTheDocument()
})
