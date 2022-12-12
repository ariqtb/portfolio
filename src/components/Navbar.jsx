import { useState } from 'react'

import styles from '../styles'

import logo from '../assets/logochar.png'
import { menu, close } from '../assets'
import { navLinks } from '../constants'
import Container from './Container'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <Container>
            <nav className='w-full flex py-4 justfy-between items-center font-poppins navbar'>
                <a href='/'><img src={logo} alt="logochar" className='w-[66px] h-[52] sm:w-[88px] sm:h-[72px]' /></a>
                <ul className='list-one md:flex hidden justify-end items-center flex-1'>
                    <li><button href="#email" className='poppins px-4 py-2 bg-secondary rounded font-normal text-white'>Email me!</button></li>
                    {/* {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointertext-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                    >
                        <h1><a href={`#${nav.id}`}>{nav.title}</a></h1>
                    </li>
                ))} */}
                </ul>
                <div className='md:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle((prev) => !prev)}
                    />

                    <div
                        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className='list-none flex flex-col justify-end items-center flex-1'>
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal cursor-pointertext-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                                >
                                    <h1><a href={`#${nav.id}`}>{nav.title}</a></h1>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar