import React, { useState } from 'react'

import styles from '../../styles'
import '../../App.css'
import poto from '../../assets/poto.jpg'

import { description } from '../../constants'
import { Container, NavBar } from '../../components'

export default function About() {
  const [desc, setDesc] = useState(false);

  return (
    <div className='bg-primary w-full overflow-hidden'>

      <NavBar />

      <Container>
        <div className='w-full flex py-16 md:px-10 justify-between items-center font-poppins'>
          <div className='pr-10'>
            <h1 className='text-white sm:text-5xl'>Tubagus Ariq Naufal</h1>
            <p className='mt-2 text-secondary text-xl'>Junior Web Programmer</p>
            <div className={`mr-12 mt-6 ${desc ? `h-52` : ``} text-white overflow-auto`}>
              <a>{desc ? description[0].fullDesc : description[0].desc}</a>
            </div>
            <a className='text-slate-400 font-sans ' onClick={() => setDesc((prev) => !prev)}>{`${desc ? `Close Full Desc.` : `Read Full Desc.`}`}</a>
            <div className={`mt-6 ${desc ? `hidden` : `flex`}`}>
              <div className='space-y-2'>
                <h2 className='text-secondary text-lg'>Role Type</h2>
                <div className='flex space-x-2 items-center text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                  <p>Fullstack Developer</p>
                </div>
              </div>
              <div className='ml-20 space-y-2'>
                <h2 className='text-secondary text-lg'>Rate</h2>
                <div className='flex items-center text-white'>
                  <p>70%</p>
                </div>
              </div>

            </div>

          </div>
          <div className='lg:px-20 md:pr-8 ml-10'>
            <img src={poto} className="sm:max-w-xs " />
          </div>
        </div>
      </Container>
    </div>
  )
}
