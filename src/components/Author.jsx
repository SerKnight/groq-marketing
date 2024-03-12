/* eslint-disable react/no-unescaped-entities */ 

import Image from 'next/image';
import Link from 'next/link';
import { GridPattern } from '@/components/GridPattern';
import { SectionHeading } from '@/components/SectionHeading';
import authorImage from '@/images/avatars/author.jpeg';

function XIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    </svg>
  );
}

export function Author() {
  return (
    <>
      <hr className="h-px my-8 bg-gray-100 border-0 dark:bg-gray-100"></hr>
      <section
        id="about-me"
        aria-labelledby="about-me-title"
        className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
      >
        <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
          <GridPattern x="50%" y="100%" />
        </div>
        <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
          <div className="bg-slate-50 pt-px sm:rounded-6xl">
            <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={authorImage}
                alt=""
                sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
              />
            </div>
            <div className="px-4 py-10 sm:px-10 sm:py-16 md:pt-20 lg:px-20 lg:pt-32">
            <SectionHeading number="4" id="about-me-title">
              About Me
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-orange-600">Christopher Knight –</span> Customer-Centric Software Leader
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              I am a versatile software engineer with over a decade of experience and a foundational interest in anthropology. I love to build and lead technical teams, work through complex data integrations, and advocate for developers in ecosystems. My passion for cutting-edge technology and its potential to transform our world align with Groq's mission to revolutionize AI compute with the groundbreaking LPU architecture.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              In my current role as a Software Engineering Manager at Guild Education, I lead a team of 6 engineers responsible for data integration with the nation's largest employers, such as PepsiCo, Walmart, and Walt Disney. This experience has honed my skills in product management, sales engineering, solution design, and managing complex integrations with enterprise customers.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Previously, as a Developer Evangelist at Xero, I managed open-source SDKs, advocated for the ecosystem, and managed hundreds of API integration customers, both through a sales-centric on-boarding and as a technical thought leader and SDK maintainer. This role strengthened my ability to communicate technical concepts effectively, build strong relationships with developers and partners, and drive adoption of innovative solutions.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              My background spans vendor analysis, software development, team leadership, and developer advocacy. I'm extremely passionate about Groq's mission and feel i'd bring an entreprenurial drive to the Sales Engineering, GroqCloud & Developer Experience teams. I am incredibly excited about the potential of Groq's LPU technology and would love to explore the opportunity to bring my skills, experience, and enthusiasm to your team.
            </p>
              <p className="mt-8">
                <Link
                  href="https://twitter.com/serknight_"
                  className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
                >
                  <XIcon className="h-10 w-10 fill-current" />
                  <span className="ml-4">@serknight_</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}