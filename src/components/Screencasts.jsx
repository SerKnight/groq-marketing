
import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import allIn from '@/images/screencasts/all-in.png';
import tech from '@/images/screencasts/tech.png';
import finance from '@/images/screencasts/finance.png';
import cnn from '@/images/screencasts/cnn.png';

const videos = [
  {
    title: "Groq's LPU breakthrough",
    description:
      "All In podcast talks about Groq's big week, training vs. inference, LPUs vs. GPUs, how to succeed in deep tech",
    image: allIn,
    url: 'https://www.youtube.com/watch?v=z6vrKA_L5pk',
    runtime: { minutes: 80, seconds: 27 },
  },
  {
    title: 'How does Groq LPU work?',
    description:
      "I invited head of silicon at Groq, Igor Arsovski, to share the nitty-gritty details behind Groq's LPUs!",
    image: tech,
    url: 'https://youtu.be/WQDMKTEgQnY?si=skhVLlHrncluxy52&t=1',
    runtime: { minutes: 71, seconds: 46 },
  },
  {
    title: "Groq's AI Chip Breaks Speed Records",
    description:
    'Cut through the noise with Jonathan Ross, designer of the first TPU at Google..',
    image: finance,
    url: 'https://www.youtube.com/watch?v=gE8SvBqMf8o',
    runtime: { minutes: 77, seconds: 32 },
  },
  {
    title: 'AI Chip Wars: LPUs, TPUs & GPUs',
    description:
      "Groq CEO Jonathan Ross explains how his company's human-like AI chip operates, as CNN's Becky Anderson..",
    image: cnn,
    url: 'https://www.youtube.com/watch?v=pRUddK6sxDg',
    runtime: { minutes: 7, seconds: 58 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="interviews"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="technology-title">
          Interviews
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Want a deep dive on Groq's technology?
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Some recent interviews with Groq's CEO, Jonathan Ross, and head of silicon, Igor Arsovski, that cover everything from the LPU's architecture to its real-world applications.
        </p>
        </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <a href={video.url} target="_blank">
                <div
                  className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                  style={{
                    backgroundImage:
                      'conic-gradient(from -49.8deg at 50% 50%, #F55036 0deg, #F55036 59.07deg, #F55036 185.61deg, #F55036 284.23deg, #F55031 329.41deg, #F55030 360deg)',
                  }}
                >
                  <div className="flex overflow-hidden rounded shadow-sm">
                    <Image src={video.image} alt="" unoptimized />
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                    <PlayIcon className="h-4 w-4 fill-current stroke-current" />
                    <time
                      dateTime={`${video.runtime.minutes}m ${video.runtime.seconds}s`}
                      className="ml-2"
                    >
                      {`${video.runtime.minutes}:${video.runtime.seconds
                        .toString()
                        .padStart(2, '0')}`}
                    </time>
                  </div>
                </div>
                <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{video.description}</p>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
