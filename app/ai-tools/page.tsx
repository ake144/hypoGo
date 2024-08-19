'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from 'react';

export default function Home() {

  const tools = [
    {
      link:'/ai-tools/summarizer',
      title:'📝 Summarizer',
      description:'Summarize any text with a click of a button. Get the main points of any article or document in seconds.',
    },
    {
      link:'/ai-tools/career-path',
      title:'Career Path Advisor',
      description:'Analyze a user\'s skills, interests, and academic history to suggest potential career paths.'
    },
    {
      link:'/ai-tools/explain',
      title:' 🧒🏻 Explain Like I am 10',
      description:'Make complex topics simple. Explain any topic in simple terms. Great for students and teachers.',
    },
    {
      link:'/ai-tools/re-write',
      title:'✍🏻 Rewrite Content',
      description:'Rewrite any text with a click of a button. Get a fresh perspective on any topic.',
    },
    {
      link:'/ai-tools/programming',
      title:'👩‍💻 Learn Programming',
      description:'Learn programming with real-time code examples. Get instant feedback on your code.',
    },
    {
      link:'/ai-tools/essay',
      title:'✍ Essay',
      description:'Write an essay with a click of a button. Get a fresh perspective on any topic.',
    },
    {
      link:'/ai-tools/research',
      title:'🔍 Research',
      description:'Research any topic with a click of a button. Get a fresh perspective on any topic.',
    },
    {
      link:'/ai-tools/interview',
      title:'🗣 Interview Prep',
      description:'Prepare for your next interview with real-time feedback. Get instant feedback on your answers.',
    },
    {
      link:'/ai-tools/letter',
      title:'📚 Cover Letter',
      description:'Write a cover letter with a click of a button. Get a fresh perspective on any topic.',
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="mt-20 px-4 lg:px-0">
          <h3 className="text-center lg:text-left text-2xl lg:text-3xl font-extrabold">
            Hundreds of powerful tools to transform your work
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.link}
                className="bg-gray-400 hover:bg-gray-800 rounded-lg h-[130px] p-3 flex flex-col justify-center items-center"
              >
                <p className="text-xl text-white text-center my-3">{tool.title}</p>
                <p className="text-sm text-white text-center my-2">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
