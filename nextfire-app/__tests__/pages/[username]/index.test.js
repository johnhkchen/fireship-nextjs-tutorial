/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import UserPage from '../../../pages/[username]'
 
 describe('User Page', () => {
     it('exists', () => {
         render(<UserPage />)
         expect(screen.getByRole('main')).toBeTruthy()
     })
 })