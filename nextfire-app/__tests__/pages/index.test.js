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

    it('has a link', () => {
        render(<IndexPage />)
        expect(screen.getByRole('link')).toBeVisible()
    })
})