/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import Navbar from '../../components/Navbar'
 
 describe('<Navbar />', () => {
    it('returns a nav', () => {
        render(<Navbar />);
        expect(screen.getByRole('navigation')).toBeTruthy()
    })

    it('contains an unordered list', () => {
        render(<Navbar />);
        expect(screen.getByRole('list')).toBeTruthy()
    })

    it('contains a list item', () => {
        render(<Navbar />);
        expect(screen.getAllByRole('listitem')[0]).toBeTruthy()
    })

    it('contains a link to the homepage', () => {
        render(<Navbar />);
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', '/')
    })

    it('has a button that says GO', () => {
        render(<Navbar />);
        const button = screen.getByRole('button')
        expect(button.innerHTML).toBe('GO')
    })

 })