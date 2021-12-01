/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from '../../components/Loader'

describe('Loader Component', () => {
    it('returns null by default', () => {
        const { container } = render
        (
            <Loader/>
        )
        expect(container.getElementsByClassName('loader')).toHaveLength(0)
    })

    it('render loader if show is true', () => {
        const { container } = render
        (
            <Loader show/>
        )
        expect(container.getElementsByClassName('loader')).not.toHaveLength(0)
    })
})