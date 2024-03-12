/* eslint-disable react/no-unescaped-entities */ 

import Image from 'next/image'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'

export function Testimonial({ id, author, children }) {
  return (
    <aside
      id={id}
      aria-label={`Testimonial from ${author.name}`}
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <a href={author.url} target="_blank" className="mt-1 text-xl text-slate-600">
          <figure>
            <div className="flex text-slate-900 sm:justify-center">
              <StarRating />
            </div>
            <blockquote className="mt-10 font-display text-5xl font-large tracking-tight text-slate-900 sm:text-center">
              {children}
            </blockquote>
            <figcaption className="mt-10 flex items-center sm:justify-center">
              <div className="overflow-hidden rounded-full bg-slate-200">
                <Image
                  className="h-12 w-12 object-cover"
                  src={author.image}
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-large leading-6 tracking-tight text-slate-900">
                  {author.name}
                </div>
                  <div className="mt-1 text-xl text-slate-600">{author.role}</div>
              </div>
            </figcaption>
          </figure>
        </a>
      </Container>
    </aside>
  )
}
