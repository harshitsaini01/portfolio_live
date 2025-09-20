import React from 'react'
import ContactForm from '../components/pages/ContactMe'
import { ShootingStars } from '../components/ui/shooting-stars'

export default function Contact() {
  return (
    <div className='bg-gradient-to-b from-blue-200 via-blue-50 to-white'>
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
 <ShootingStars />
</div>
        <ContactForm/>
    </div>
  )
}
