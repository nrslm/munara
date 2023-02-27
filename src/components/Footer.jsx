import React, { useState } from 'react'
import Logo from '../assets/image/logo.png'
import { Select } from '@mantine/core'
import { Link } from "react-router-dom"
function Footer() {
  const [value, setValue] = useState()

  return (
    <div className='dark:bg-slate-800 dark:text-white border-t-gray-500  bg-gray-100 '>
      <div className='container mx-auto'>
        <div className='grid grid-cols-6 p-6'>
          <div className='flex items-center'>
            <img src={Logo} alt="" className='w-16' />
            <p className='ml-2'>Munara-stroy</p>
          </div>
          <div className='grid grid-cols-1'>
            <p className='text-2xl font-semibold'>Pages</p>
            <Link to={"/"} className='text-xl mt-2'>Home</Link>
            <Link to={"/About"} className='text-xl mt-2'>About</Link>
            <Link to={"/Contact"} className='text-xl mt-2'>Contact</Link>
            <p className='text-xl mt-2'>Blog</p>
          </div>
          <div className='col-span-2 justify-center'>
            <p className='text-2xl font-semibold'>Pages</p>
            <p className='text-xl mt-2'>Home</p>
            <p className='text-xl mt-2'>About</p>
            <p className='text-xl mt-2'>Contact</p>
            <p className='text-xl mt-2'>Blog</p>
          </div>
          {/* <div>
            <p className='text-2xl font-semibold'>Pages</p>
            <p className='text-xl mt-2'>Home</p>
            <p className='text-xl mt-2'>About</p>
            <p className='text-xl mt-2'>Contact</p>
            <p className='text-xl mt-2'>Blog</p>
          </div> */}

          <div className='col-span-2'>
            <h1 className='text-2xl mt-4'>Мунара строй теперь в Оше</h1>
            <p className='mt-4 text-sm'>Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.</p>
            <div className='flex mt-6'>
              <Select value={value} onChange={setValue} data={["fsdfdsf", "fdsfdsf"]} />
              <button
                className='rounded-lg bg-amber-600
                text-white p-2 pl-4 pr-4 ml-4'
              >Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer