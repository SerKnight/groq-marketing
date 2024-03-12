/* eslint-disable react/no-unescaped-entities */

'use client';

import clsx from 'clsx';
import { CheckIcon } from '@/components/CheckIcon';
import { Container } from '@/components/Container';
import { GridPattern } from '@/components/GridPattern';
import { SectionHeading } from '@/components/SectionHeading';

function Competitor({ name, description, strengths, weaknesses, featured = false }) {
  return (
    <div
      className={clsx(
        'relative px-4 py-8 sm:rounded-3xl sm:px-6 md:py-6 lg:px-8 border-2 border-transparent dark:border-gray-100',
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
            'text-lg font-semibold tracking-tight',
            featured ? 'text-white' : 'text-slate-900',
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-sm tracking-tight',
            featured ? 'text-white' : 'text-slate-600',
          )}
        >
          {description}
        </p>
        <div className="order-last mt-4">
          <h4 className={clsx('text-sm font-semibold', featured ? 'text-white' : 'text-slate-900')}>
            Strengths
          </h4>
          <ul
            role="list"
            className={clsx(
              '-my-1 text-xs tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {strengths.map((strength) => (
              <li key={strength} className="flex items-center py-1">
                <CheckIcon
                  className={clsx('h-4 w-4 flex-none', featured ? 'fill-white' : 'fill-slate-600')}
                />
                <span className="ml-2">{strength}</span>
              </li>
            ))}
          </ul>
          <h4 className={clsx('mt-4 text-sm font-semibold', featured ? 'text-white' : 'text-slate-900')}>
            Weaknesses
          </h4>
          <ul
            role="list"
            className={clsx(
              '-my-1 text-xs tracking-tight',
              featured ? 'text-white' : 'text-slate-900',
            )}
          >
            {weaknesses.map((weakness) => (
              <li key={weakness} className="flex items-center py-1">
                <span className="ml-2">{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Competition() {
  return (
    <>
      <hr className="h-px my-8 bg-gray-100 border-0 dark:bg-gray-100" />
      <section
        id="competition"
        aria-labelledby="competition-title"
        className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
      >
        <Container>
          <SectionHeading number="3" id="competition-title">
            Competition
          </SectionHeading>
          <p className="mt-8 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Groq's Unique Position in A.I.
          </p>
          <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
            While Groq's LPU technology competes with various players in the AI hardware and software ecosystem, its
            ability to efficiently run open-source models sets it apart.
          </p>
        </Container>
        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <Competitor
              name="Nvidia"
              description="Leading GPU manufacturer for AI and gaming"
              strengths={[
                'Dominant market share',
                'CUDA ecosystem',
                'Brand recognition',
              ]}
              weaknesses={[
                'High power consumption',
                'Expensive for inference',
                'Proprietary stack',
              ]}
            />
            <Competitor
              name="AMD"
              description="Large CPU and GPU manufacturer competing in AI"
              strengths={[
                'Data center CPUs',
                'Growing GPU offerings',
                'More affordable',
              ]}
              weaknesses={[
                'Smaller AI share',
                'Less mature ecosystem',
                'Limited adoption',
              ]}
            />
            <Competitor
              featured
              name="Groq"
              description="Specialized AI chip company with unique LPU architecture"
              strengths={[
                'Purpose-built for LLMs',
                'Highly efficient & fast',
                'Seamless integration',
              ]}
              weaknesses={[
                'Newer entrant',
                'Less widely adopted',
                'Focused only on inference',
              ]}
            />
            <Competitor
              name="OpenAI"
              description="Leading AI research lab and creator of GPT models"
              strengths={[
                'LLM pioneers',
                'Influential in AI',
                'Microsoft partnership',
              ]}
              weaknesses={[
                'Relies on 3rd-party HW',
                'Focused on specific apps',
                'Not in hardware market',
              ]}
            />
            <Competitor
              name="Anthropic"
              description="AI research company focusing on AI safety and ethics"
              strengths={[
                'Innovative AI safety',
                'Ethical AI development',
                'Strong research team',
              ]}
              weaknesses={[
                'Less established brand',
                'Narrower focus',
                'Relies on cloud providers',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}