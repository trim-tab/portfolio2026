"use client"

import React from 'react'

import { useWindowSize } from './hooks'

import dynamic from 'next/dynamic';
const DesktopLanding = dynamic(() => import('./DesktopLanding'), { ssr: false });
const MobileLanding = dynamic(() => import('./MobileLanding'), { ssr: false });

export default function LandingPage() {
  const { width } = useWindowSize();

  if (width === undefined) return null; // Wait for client-side measurement
  return width > 768 ? <DesktopLanding /> : <MobileLanding />;
}