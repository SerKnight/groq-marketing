/* eslint-disable react/no-unescaped-entities */ 

'use client';

import Image from 'next/image';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import abstractBackgroundImage from '@/images/resources/abstract-background.png';
import githubImage from '@/images/resources/github.png';
import playgroundImage from '@/images/resources/playground.png';
import showcaseImage from '@/images/resources/samples.png';

import benchmarkImage1 from '@/images/benchmarks/groq-compare.jpeg';
import benchmarkImage2 from '@/images/benchmarks/latency-v-throughput.png';
import benchmarkImage3 from '@/images/benchmarks/throughput-v-price.jpeg';
import benchmarkImage4 from '@/images/benchmarks/throughput.png';
import benchmarkImage5 from '@/images/benchmarks/response-time.png';
import { useState } from 'react';

const benchmarkData = [
  {
    image: benchmarkImage1,
    alt: 'Throughput vs. Price comparison',
  },
  {
    image: benchmarkImage2,
    alt: 'Latency vs. Throughput comparison',
  },
  {
    image: benchmarkImage3,
    alt: 'Latency and Throughput comparison',
  },
  {
    image: benchmarkImage4,
    alt: 'Throughput',
  },
  {
    image: benchmarkImage5,
    alt: 'Response time',
  },
];


const papersData = [
  {
    image: benchmarkImage1,
    alt: 'Throughput vs. Price comparison',
  },
];

const resources = [
  {
    title: 'Groq Playground',
    description:
      'Explore and experiment with the LPU using the best open-source models. Enjoy a GPT-like interface and store your chat history.',
    image: function PlaygroundImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={playgroundImage} alt="" unoptimized />
        </div>
      );
    },
    link: 'https://console.groq.com/playground',
  },
  {
    title: 'Groq on GitHub',
    description:
      'Access Groq\'s open-source projects, SDKs, and libraries on GitHub. Collaborate with the community and contribute to the development of Groq\'s technology.',
    image: function GithubImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image className="relative" src={githubImage} alt="" unoptimized />
        </div>
      );
    },
    link: 'https://github.com/groq',
  },
  {
    title: 'Showcase Applications',
    description:
      'Discover sample apps and demos that showcase the capabilities of Groq\'s LPU. Get inspired and learn how to build your own applications.',
    image: function ShowcaseImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image className="relative" src={showcaseImage} alt="" unoptimized />
        </div>
      );
    },
    link: 'https://console.groq.com/docs/showcase-applications',
  },
];

export function Documentation() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? benchmarkData.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === benchmarkData.length - 1 ? 0 : prevSlide + 1));
  };

  const [currentPaper, setCurrentPaper] = useState(0);

  const prevPaper = () => {
    setCurrentPaper((prevPaper) => (prevPaper === 0 ? papersData.length - 1 : prevPaper - 1));
  };

  const nextPaper = () => {
    setCurrentPaper((prevPaper) => (prevPaper === papersData.length - 1 ? 0 : prevPaper + 1));
  };

  return (
    <section
      id="documentation"
      aria-labelledby="resources-title"
      className="scroll-mt-14 pt-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="resources-title">
          Documentation
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Dive into <i>Groq's Docs</i> and the world of low latency,
        </p>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          large language model engineering
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Access Groq's playground, GitHub repositories, and showcase applications to accelerate your learning and build cutting-edge AI solutions.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                  <resource.image />
                </div>
                <div>
                  <h3 className="mt-4 text-base font-medium tracking-tight text-slate-900">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </Container>
      <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-100"></hr>
      <Container size="lg" className="mt-16">
        <div className="mx-auto mt-16 max-w-5xl lg:px-6">
          <h3 className="text-4xl font-semibold text-center text-slate-900">Benchmarks</h3>
          <div className="relative mt-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={benchmarkData[currentSlide].image}
                alt={benchmarkData[currentSlide].alt}
                className="w-full"
              />
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            >
              &larr;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            >
              &rarr;
            </button>
          </div>
        </div>
      </Container>
      {/* <Container size="lg" className="mt-16">
        <div className="mx-auto mt-16 max-w-5xl lg:px-6">
          <h3 className="text-4xl font-semibold text-center text-slate-900">Papers</h3>
          <div className="relative mt-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={papersData[currentPaper].image}
                alt={papersData[currentPaper].alt}
                className="w-full"
              />
            </div>
            <button
              onClick={prevPaper}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            >
              &larr;
            </button>
            <button
              onClick={nextPaper}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            >
              &rarr;
            </button>
          </div>
        </div>
      </Container> */}
    </section>
  );
}