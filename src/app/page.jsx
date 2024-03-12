/* eslint-disable react/no-unescaped-entities */ 

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
// import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Competition } from '@/components/Competition'
import { Documentation } from '@/components/Documentation'
import { Screencasts } from '@/components/Screencasts'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage2 from '@/images/avatars/sweede.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <Screencasts />
      <Testimonial
        id="testimonial-from-yt"
        author={{
          name: 'All About A.I.',
          role: 'kris@allabtai.com',
          url: 'https://youtu.be/VVs7NW5yB3M?si=y1BHRYYkKdErlQc0&t=634',
          image: avatarImage2,
        }}
      >
        <p>
          "Wow that was quick"
        </p>
      </Testimonial>
      <Documentation />
      <Competition />
      <Testimonials />
      <Author />
      {/* <FreeChapters /> */}
      <Footer />
    </>
  )
}
