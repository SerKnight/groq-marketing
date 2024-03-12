import Link from 'next/link';
import { CheckIcon } from '@/components/CheckIcon';
import { Container } from '@/components/Container';

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Groq's LPU architecture is an evolutionary leap forward from GPUs, poised to
          disrupt the A.I. landscape.
        </p>
        <p className="mt-4">
        As Chamath Palihapitiya noted in his <a href="https://chamath.substack.com/p/the-future-of-ai-compute-a-conversation" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">recent interview</a> with Groq CEO Jonathan Ross, <i>"You now see developers stress testing Groq and finding
          that we are meaningfully, meaningfully faster and cheaper than any Nvidia
          solution, there's the potential here to be really disruptive."</i>
        </p>
        <p className="mt-4">
          The Groq Tensor Streaming Processor (TSP) architecture, now referred to as the
          Language Processing Unit (LPU), is purpose-built for the demands of large
          language models and offers several key advantages over traditional CPUs and GPUs:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Deterministic execution model, enabling predictable performance',
            'Simplified SIMD architecture, facilitating easy-to-use software development',
            'Massive memory bandwidth, supporting the data-intensive needs of LLMs',
            'Built-in inter-chip communication, allowing seamless scaling',
            'Energy efficiency, providing more processing power per watt',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-orange-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          The rapid growth of large language models has created an unprecedented demand
          for specialized AI hardware. With the size of LLMs increasing by an order of
          magnitude every year, the need for purpose-built architectures like Groq's
          LPU has never been greater.
        </p>
        <p className="mt-4">
          As the world's compute infrastructure shifts towards AI-centric workloads,
          Groq is positioned to capture a significant portion of this expanding market.
          With its unique architecture and strong scaling capabilities, Groq's LPU is
          ready to meet the challenges of the AI era head-on.
        </p>
        <p className="mt-10">
          <Link
            href="https://wow.groq.com/about-us/"
            className="text-base font-medium text-orange-600 hover:text-orange-800"
          >
            Get in touch with our sales team to learn more{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  );
}