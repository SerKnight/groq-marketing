import { Container } from '@/components/Container';
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable';
import { SectionHeading } from '@/components/SectionHeading';

const tableOfContents = {
  'Introduction to Groq': {
    'About Groq': 1,
    'The AI Landscape': 5,
    'Groq\'s Mission': 10,
  },
  'Groq LPU Architecture': {
    'LPU Overview': 15,
    'Deterministic Execution Model': 20,
    'Simplified SIMD Architecture': 25,
    'Memory Bandwidth and Scaling': 30,
  },
  'Software Development Kit': {
    'GroqWare SDK': 35,
    'Compiler and Runtime': 40,
    'Performance Optimization': 45,
  },
  'Use Cases and Applications': {
    'Large Language Models': 50,
    'Computer Vision': 55,
    'Recommendation Systems': 60,
    'Scientific Computing': 65,
  },
  'Benchmarks and Performance': {
    'Inference Benchmarks': 70,
    'Comparison with GPUs': 75,
    'Power Efficiency': 80,
  },
};

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of Contents
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Explore key topics covered in Groq's docs & whitepapers
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Discover the groundbreaking LPU architecture, software development kit, and real-world applications of Groq's technology. Learn how Groq is revolutionizing the AI landscape with unparalleled performance and efficiency.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  );
}