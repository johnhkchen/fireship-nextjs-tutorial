/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import LoginPage from '../../pages/login'
 
 describe('Login Page', () => {
     it('renders some text that say "Username"', () => {
         render(<LoginPage />)
         expect(screen.queryByText('Username')).toBeVisible()
     })

    it('has a navbar on top', () => {
        render(<LoginPage />)
        const button = screen.getByRole('button')
        expect(button.innerHTML).toBe('GO')
    })

 })