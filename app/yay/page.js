"use client"

import CatLaugh from './CatLaugh.json'
import Lottie from 'lottie-react';

export default function page () {
  return (
    <div className='text-center h-screen'>
        <Lottie animationData={CatLaugh} className='h-[280px]' />
        <p className='text-primary font-bold text-[28px] leading-none'>YAYYY</p>
    </div>
  )
}
