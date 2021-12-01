/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import AdminSlugPage from '../../pages/admin/[slug]'
 
 describe('Enter Page', () => {
     it('exists', () => {
         render(<AdminSlugPage />)
         expect(screen.getByRole('main')).toBeTruthy()
     })
 })