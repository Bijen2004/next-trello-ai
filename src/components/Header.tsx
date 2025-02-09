"use client"

import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon,UserCircleIcon } from '@heroicons/react/24/solid'
import Avatar from 'react-avatar'

const Header = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
        <div className='
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-pink-400
        to-[#0055D1]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50
        '/>
        <Image 
        src={"https://links.papareact.com/c2cdd5"}
        alt='logo'
        width={300}
        height={100}
        />

        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
            <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
                <input type="text"  placeholder='Search' className='flex-1 outline-none p-2'/>
                <button type='submit' hidden>Search</button>
            </form>
            <Avatar name='Bijen Shrestha' round color='#0055D1' size="50"/>
        </div>
    </div>
    <div className='flex items-center justify-center px-5 py-2 md:py-5'>
            <p className='flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1] p-5'>
                <UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1] mr-1'/>
                Gpt is summarising your tasks for the day
            </p>
        </div>
    </div>
  )
}

export default Header