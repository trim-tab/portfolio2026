import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

export default function MobileHero() {
  return (
<>

   
        <div id="navLeft" className="flex h-screen content-around justify-around flex-col">
                  <ul className="text-sky-200 p-10 ">
                    <li><Logo /></li>
                    <li className="pt-3 text-2xl">Hello, I&apos;m</li>
                    <li className="text-5xl">Sarah Johnson</li>
                  </ul>
                 

      <nav>
      <ul>
        <li className='py-1'>
      <button className="w-full bg-slate-800 text-white py-7 px-4  ">
          <Link className="md:text-[1em] sm:text-[1em]" href="../app/blog">Blog</Link>
      </button>
        </li>
        <li className='py-.3'>
          <button className="w-full bg-slate-800 text-white py-7 px-4 ">
            <Link className="md:text-[1em] sm:text-[1em]"href="./app/Sites">Sites</Link>
          </button>
        </li>
        <li className='py-1'>
          <button className="w-full bg-slate-800 text-white py-7 px-4 ">
          <Link className="md:text-[1em] sm:text-[1em]"href="./app/Water">Water</Link>
          </button>
        </li>
        <li className='py-.3'>
          <button className="w-full bg-slate-800 text-white py-7 px-4 ">
          <Link className="md:text-[1em] sm:text-[1em]"href="https://trimtabular.com/photo-selects.html">Photo</Link>
        </button>
        </li>
      </ul>
    </nav>
    </div>
    </>
  )
}
