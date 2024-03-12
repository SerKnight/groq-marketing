'use client';

import Image from 'next/image';
import { Container } from '@/components/Container';

const testimonials = [
  {
    content: '‘Groq has a genuinely amazing performance advantage for an individual sequence. This could enable techniques such as chain of thought to be far more usable in the real world. ',
    author: {
      name: 'Ram Ahluwalia',
      username: '@ramahluwalia',
      image: 'https://pbs.twimg.com/profile_images/1686377423812890624/Y10TgR5X_400x400.jpg',
    },
  },
  {
    content: 'NVDA CEO thinks their install base of GPUs & devs knowing CUDA is a big moat for their inference business. True, Groq can\'t immediately build out, but they\'ve done with 45 devs in 100 days what took NVDA 50,000 devs inside & outside the company 10 years',
    author: {
      name: 'zawy',
      username: '@zawy3',
      image: 'https://pbs.twimg.com/profile_images/1519496488921018369/xaEfzw6J_400x400.jpg',
    },
  },
  {
    content: 'The Groq LPU Inference Engine + unique end-to-end processing will change everything.',
    author: {
      name: 'Shaun Ralston',
      username: '@shaunralston',
      image: 'https://pbs.twimg.com/profile_images/880603327758823425/wHP4Z5lA_400x400.jpg',
    },
  }
];


function Tweet({ author, children }) {
  return (
    <div className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <div className="flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image className="h-12 w-12 object-cover" src={author.image} alt="" width={120} height={120} />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">{author.name}</div>
          <div className="mt-1 text-sm text-slate-600">{author.username}</div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg tracking-tight text-slate-900">{children}</p>
      </div>
    </div>
  );
}

export function Testimonials() {

  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          What people are saying about Groq...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Groq's revolutionary LPU technology is making waves in the AI community. Here's what people are saying about
          Groq's performance and capabilities.
        </p>
      </Container>
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
      >
        {testimonials.map((testimonial, index) => (
          <li key={index} className="">
            <Tweet author={testimonial.author}>{testimonial.content}</Tweet>
          </li>
        ))}
      </ul>
    </section>
  );
}