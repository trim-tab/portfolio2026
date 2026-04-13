import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import honestEd from "../../public/images/sites/honested.jpg"

import ecs from "../../public/images/sites/ecs.jpg"

import danielson from "../../public/images/sites/danielsonTherapy.jpg"
export default function Sites 
() {
  return (
    <>
    
    <div className="flex flex-col md:flex-row mx-auto ">
      <Link href="https://www.honest-ed.com"><Image
      src = {honestEd}
      className= "object-cover overflow-hidden" 
      alt = "honested"
      width= {500}
      height={800}
      /></Link> 
      <Link href="https://danielsontherapy.com"><Image
      src = {danielson}
      className= "object-cover"
      alt = "Danielson Therapy"
     width= {500}
      height={800}
      /></Link> 
      <Link href="https://ecs.vegas/"><Image
      className= "object-cover"
      src = {ecs}
      alt = "Eye and Cosmetic Surgery"
        width= {500}
      height={800}
      /></Link> 
    </div>
 
    </>
  )
}
