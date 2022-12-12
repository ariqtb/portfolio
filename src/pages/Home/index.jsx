import React from 'react'

import styles from '../../styles'
import '../../App.css'

import { NavBar } from '../../components'
import { Hero } from './Hero'

export default function Home() {
    return (
        <div className='bg-primary w-full overflow-hidden'>
            <NavBar />
            <Hero />
        </div >
    )
}
