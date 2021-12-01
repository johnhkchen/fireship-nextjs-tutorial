/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import UserSlugPage from '../../../pages/[username]/[slug]'
 
 describe('Enter Page', () => {
     it('exists', () => {
         render(<UserSlugPage />)
         expect(screen.getByRole('main')).toBeTruthy()
     })
 })