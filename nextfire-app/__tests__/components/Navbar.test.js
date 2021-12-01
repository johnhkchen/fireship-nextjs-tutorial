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

    it('contains two list items (1/2)', () => {
        render(<Navbar />);
        expect(screen.getAllByRole('listitem')[0]).toBeTruthy()
    })

    it('contains two list items (2/2)', () => {
        render(<Navbar />);
        expect(screen.getAllByRole('listitem')[1]).toBeTruthy()
    })

    it('contains a link to the homepage', () => {
        render(<Navbar />);
        expect(screen.getByRole('link')).toBeTruthy()
    })

    it('has a button', () => {
        render(<Navbar />);
        expect(screen.getByRole('button')).toBeTruthy()
    })

 })