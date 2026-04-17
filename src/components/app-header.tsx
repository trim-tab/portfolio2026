"use client"

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import {usePathname} from "next/navigation"

const routes = [
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: "BB8",
    path: "/bb8",
  },
  {
    label: "Sites",
    path: "/Sites",
  }

]


export default function AppHeader() {
  const activePathname = usePathname();
    console.log(activePathname);
  return (
<header className="flex justify-between items-center  border-b border-white/10 px-1 py-2">
  <Logo />
    <nav>
      <ul className="flex gap-2 text-xs">{routes.map((route)=> (
            <li key={route.path}>
              <Link 
              href={route.path} 
              className = 'text-white/50 rounded-sm py-1 px-2 hover:text-white focus:text-white bg-black/10 text-white'
              >
                {route.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
    </header>
  )
}

