'use client';

import clsx from 'clsx';
// import { Button } from '@/components/Button';
import { CheckIcon } from '@/components/CheckIcon';
import { Container } from '@/components/Container';
import { GridPattern } from '@/components/GridPattern';
import { SectionHeading } from '@/components/SectionHeading';
import { useState } from 'react';
// import Image from 'next/image';


function Competitor({ name, description, strengths, weaknesses, featured = false }) {
  return (
    <div
      className={clsx(
        'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-orange-600 sm:shadow-lg',
      )}
    >
      {featured && (
        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className="relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <div className="order-last mt-8">
          <h4 className={clsx('text-lg font-semibold', featured ? 'text-white' : 'text-slate-900')}>
            Strengths
          </h4>
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured ? 'divide-white/10 text-white' : 'divide-slate-200 text-slate-900',
            )}
          >
            {strengths.map((strength) => (
              <li key={strength} className="flex py-2">
                <CheckIcon
                  className={clsx('h-8 w-8 flex-none', featured ? 'fill-white' : 'fill-slate-600')}
                />
                <span className="ml-4">{strength}</span>
              </li>
            ))}
          </ul>
          <h4 className={clsx('mt-6 text-lg font-semibold', featured ? 'text-white' : 'text-slate-900')}>
            Weaknesses
          </h4>
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured ? 'divide-white/10 text-white' : 'divide-slate-200 text-slate-900',
            )}
          >
            {weaknesses.map((weakness) => (
              <li key={weakness} className="flex py-2">
                <span className="ml-4">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Competition() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? benchmarkData.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === benchmarkData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <>
      <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-100"></hr>
      <section
        id="competition"
        aria-labelledby="competition-title"
        className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
      >
        <Container>
          <SectionHeading number="3" id="competition-title">
            Competition
          </SectionHeading>
          <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Groq's Unique Position in the AI Landscape
          </p>
          <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
            While Groq's LPU technology competes with various players in the AI hardware and software ecosystem, its
            ability to efficiently run open-source models sets it apart.
          </p>
        </Container>
        <div className="mx-auto mt-16 max-w-5xl lg:px-6">
          <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
            <Competitor
              name="Nvidia"
              description="Leading GPU manufacturer for AI and gaming."
              strengths={[
                'Dominant market share in AI hardware',
                'Extensive CUDA software ecosystem',
                'Strong brand recognition',
              ]}
              weaknesses={[
                'High power consumption',
                'Expensive for inference workloads',
                'Proprietary software stack',
              ]}
            />
            <Competitor
              name="AMD"
              description="CPU and GPU manufacturer competing in AI."
              strengths={[
                'Strong presence in data center CPUs',
                'Growing GPU offerings for AI',
                'More affordable than Nvidia',
              ]}
              weaknesses={[
                'Smaller AI market share compared to Nvidia',
                'Less mature software ecosystem for AI',
                'Limited adoption in AI community',
              ]}
            />
            <Competitor
              name="OpenAI"
              description="AI research laboratory and creator of GPT models."
              strengths={[
                'Pioneers in large language model development',
                'Highly influential in AI community',
                'Strong partnerships with Microsoft and others',
              ]}
              weaknesses={[
                'Relies on third-party hardware for training and inference',
                'Focused on specific AI applications and research',
                'Not a direct competitor in AI hardware market',
              ]}
            />
            <Competitor
              featured
              name="Groq"
              description="Specialized AI chip company with unique LPU architecture."
              strengths={[
                'Purpose-built for AI inference and large language models',
                'Highly efficient and fast architecture',
                'Seamless integration with open-source models and frameworks',
              ]}
              weaknesses={[
                'Newer entrant in the market',
                'Less widely adopted compared to established players',
                'Focused primarily on inference rather than training',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}