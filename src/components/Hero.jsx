import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/groq-chip.png'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
        "Developers are noticing Groq is meaningfully faster and cheaper than any Nvidia solution."
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-orange-600 before:content-['—_']">
          Chamath Palihapitiya
        </strong>
        , Founder and CEO at Social Capital
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-orange-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div style={{ '--tw-rotate': '-47deg' }} className="relative z-10 mx-auto transform-gpu flex w-64 rounded-xl md:w-80 lg:w-auto">
            <Image
              className="w-full cursor-logo transition-transform duration-500 ease-in-out hover:scale-110"
              src={coverImage}
              alt=""
              priority
            />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Unleash the Power of Groq's LPU Inference Engine
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Experience lightning-fast, deterministic AI inference with Groq's revolutionary Language Processing Unit (LPU).
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="https://groq.com/" color="orange">
                Try Groq Chat Demo
              </Button>
              <Button href="https://wow.groq.com/" variant="outline" color="orange">
                Developer? Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}