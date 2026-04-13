import React from 'react'
import LeftHero from "./LeftHero"
import RightHero from './RightHero'

export default function DesktopLanding() {
  return (
    <>
    <div className="flex flex-col md:flex-row">
    <LeftHero />
    <RightHero />
    </div>
    </>
  )
}
