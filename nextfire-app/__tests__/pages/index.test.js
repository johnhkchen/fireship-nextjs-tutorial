/**
 * @jest-environment jsdom
 */
import '../../__mocks__/matchMedia.mock'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
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

    it('has a button which says "GO"', () => {
        render(<IndexPage />)
        expect(screen.getByText('GO')).toBeVisible()
    })

    it('has a ToastButton labeled "Toast Me"', () => {
        render(<IndexPage />)
        const toast_button = screen.getByText("Toast Me")
        expect(toast_button).toBeTruthy()
    })

    it('creates a toast message saying "hello toast"', async () => {
        render(<IndexPage />)
        const toast_button = screen.getByText("Toast Me")
        fireEvent.click(toast_button)
        const items = await screen.findAllByText("hello toast")
        expect(items).toHaveLength(1)
    })

    
})