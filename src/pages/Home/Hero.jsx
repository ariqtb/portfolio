import React from 'react'

import { arrowLink } from '../../assets'
import poto from '../../assets/poto.jpg'
import { navLinks } from '../../constants'
import { Container } from '../../components'

export const Hero = () => {
    return (
        <Container>

            <hero className="w-full flex py-16 md:px-10 justify-between items-center font-poppins">
                <div className='text-white pr-8'>
                    <p className='text-3xl'>Hello!<br /> <h1 className='sm:text-name'>I AM <b>ARIQ</b></h1></p>
                    <p className='text-xl'>Junior Web Developer</p>
                    <button className="my-6 px-5 py-3 bg-secondary rounded font-normal text-xl">Explore Me!</button><br />
                    <button className='sm:inline-block hidden mt-6 px-5 py-3 bg-primaryhover rounded font-normal text-normal hover:bg-primary'>
                        <div className='flex justify-between items-center'>
                            <p className='text-left'>stop beating around the bush, just give me  your contact!</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 sm:ml-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </button>
                </div>
                {/* <img src={poto} alt="bengeut" className='w-[66px] h-[52] sm:w-[364px] sm:h-[502px]' /> */}
                <div className='lg:px-20 md:pr-8'>
                    <img src={poto} alt="bengeut" className='w-[100px] h-[100px] sm:w-[264px] sm:h-[264px]' />
                </div>
                <ul className='md:block hidden text-white text-center leading-[5rem]'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                        >
                            <a href={`${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    {/* <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#tryit'>Try it</a></li>
                <li><a href='#contact'>Contact</a></li> */}
                </ul>
            </hero>
        </Container>
    )
}
