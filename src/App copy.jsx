import React from 'react'

import styles from './styles'
import './App.css'

import { NavBar, Hero } from './components'

const App = () =>
(
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  </div >
)


export default App