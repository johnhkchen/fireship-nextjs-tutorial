/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import EnterPage from '../../pages/enter'
 
 describe('Enter Page', () => {
     it('exists', () => {
         render(<EnterPage />)
         expect(screen.getByRole('main')).toBeTruthy()
     })
 })