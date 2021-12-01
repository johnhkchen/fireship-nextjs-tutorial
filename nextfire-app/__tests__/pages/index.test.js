/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import IndexPage from '../../pages/index'

describe('Index Page', () => {
    it('has some text', () => {
        render(<IndexPage />)
        expect(screen.getByText('Hello World.')).toBeVisible()
    })

    it('has a link to the about page', () => {
        render(<IndexPage />)
        expect(screen.getAllByRole('link')[0]).toBeVisible()
    })

    it('has a loader', () => {
        const { container } = render(<IndexPage />)
        expect(container.getElementsByClassName('loader')).not.toHaveLength(0)
    })

    it('has a navbar', () => {
        const { container } = render(<IndexPage />)
        expect(container.getElementsByClassName('navbar')).not.toHaveLength(0)
    })
})