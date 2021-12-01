/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import AboutPage from '../../pages/about'
 
 describe('About Page', () => {
     it('has some text', () => {
         render(<AboutPage />)
         expect(screen.getByText('I am John!')).toBeVisible()
     })
 
     it('has a link', () => {
         render(<AboutPage />)
         expect(screen.getByRole('link')).toBeVisible()
     })
 })