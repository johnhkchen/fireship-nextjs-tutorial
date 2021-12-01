/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import AdminPage from '../../../pages/admin'
 
 describe('Enter Page', () => {
     it('exists', () => {
         render(<AdminPage />)
         expect(screen.getByRole('main')).toBeTruthy()
     })
 })