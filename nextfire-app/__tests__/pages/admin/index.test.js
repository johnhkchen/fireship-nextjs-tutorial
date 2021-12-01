/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import AdminPage from '../../../pages/admin'
 
 describe('Admin Page', () => {
     it('exists', () => {
         render(<AdminPage />)
         expect(screen.getByRole('main')).toBeTruthy()
     })
 })