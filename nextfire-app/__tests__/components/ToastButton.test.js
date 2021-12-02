/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import ToastButton from '../../components/ToastButton'
 
 describe('<ToastButton />', () => {
    it('returns a button', () => {
        render(<ToastButton />);
        expect(screen.getByRole('button')).toBeTruthy()
    })
    
    it('is labeled "Toast Me"', () => {
        render(<ToastButton />);
        const button = screen.getByRole('button')
        expect(button.innerHTML).toBe('Toast Me')
    })

    it('has an onClick behavior"', () => {
        render(<ToastButton />);
        const button = screen.getByRole('button')
        expect(button.onclick).toBeTruthy()
    })
 })