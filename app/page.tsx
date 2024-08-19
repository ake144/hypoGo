"use client";

import Card from "@/components/card";
import { OrbitingCirclesDemo } from "@/components/cards";
import { FrequentlyAsked } from "@/components/frequently";
import { ScrollBasedVelocityDemo } from "@/components/testmonials";
import { Button } from "@/components/ui/button";
import { AcademicPage, JobsPage, WritingPage } from "@/components/tools";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";
import React from "react";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  const tools = [
    {
      link: "/ai-tools/summarizer",
      title: "📝 Summarizer",
      description:
        "Summarize any text with a click of a button. Get the main points of any article or document in seconds.",
    },
    {
      link: "/ai-tools/career-path",
      title: "Career Path Advisor",
      description:
        "Analyze a user's skills, interests, and academic history to suggest potential career paths.",
    },
    {
      link: "/ai-tools/explain",
      title: " 🧒🏻 Explain Like I am 10",
      description:
        "Make complex topics simple. Explain any topic in simple terms. Great for students and teachers.",
    },
    {
      link: "/ai-tools/re-write",
      title: "✍🏻 Rewrite Content",
      description:
        "Rewrite any text with a click of a button. Get a fresh perspective on any topic.",
    },
    {
      link: "/ai-tools/programming",
      title: "👩‍💻 Learn Programming",
      description:
        "Learn programming with real-time code examples. Get instant feedback on your code.",
    },
    {
      link: "/ai-tools/essay",
      title: "✍ Essay",
      description:
        "Write an essay with a click of a button. Get a fresh perspective on any topic.",
    },
    {
      link: "/ai-tools/research",
      title: "🔍 Research",
      description:
        "Research any topic with a click of a button. Get a fresh perspective on any topic.",
    },
    {
      link: "/ai-tools/interview",
      title: "🗣 Interview Prep",
      description:
        "Prepare for your next interview with real-time feedback. Get instant feedback on your answers.",
    },
    {
      link: "/ai-tools/letter",
      title: "📚 Cover Letter",
      description:
        "Write a cover letter with a click of a button. Get a fresh perspective on any topic.",
    },
  ];

  const otherTools = [
    {
      title: "Forum",
      description: "Join the community and get help from others.",
    },
    {
      title: "Blog",
      description:
        "Read the latest articles and stay up to date with the latest trends.",
    },
    {
      title: "Courses",
      description:
        "Learn new skills and advance your career with our online courses.",
    },
    {
      title: "Webinars",
      description: "Attend live webinars and learn from experts in the field.",
    },
    {
      title: "Podcast",
      description:
        "Listen to our podcast and get inspired by the stories of successful people.",
    },
    {
      title: "Book Club",
      description:
        "Join our book club and discuss the latest books with other members.",
    },
    {
      title: "Events",
      description: "Attend our events and meet other members of the community.",
    },
    {
      title: "Resources",
      description:
        "Get access to resources that will help you learn and grow.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="w-11/12 lg:w-1/2 mt-20 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold font-serif">
          Write, Research, Learn and Work with HypoGo
        </h2>
        <p className="text-sm lg:text-md font-semibold my-4">
          HypoGo delivers high-quality writing. Instantly tap into a wealth of knowledge with real-time search and citations. Simplify complex topics and write with the power of AI.
        </p>
        <Link href="#tools">
          <Button className="mx-auto my-5">Get Started for Free</Button>
        </Link>
      </div>
      <div className="mt-20 mx-4 lg:mx-[100px]">
        <h3
          id="tools"
          className="text-center lg:text-left text-2xl lg:text-3xl font-extrabold"
        >
          More than 10 powerful tools to transform your work
        </h3>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              className="bg-gray-400 hover:bg-gray-800 rounded-lg h-[130px] p-3 flex flex-col justify-center items-center"
            >
              <p className="text-xl text-white">{tool.title}</p>
              <p className="text-sm text-white mt-2 text-center">{tool.description}</p>
            </Link>
          ))}
        </div>

        <Link href="/ai-tools">
          <Button className="flex items-center justify-center mx-auto mt-6 text-xl">
            Explore more
          </Button>
        </Link>
      </div>

      <div className="mt-20 mx-4 lg:mx-[100px]">
        <h3 className="text-center lg:text-left text-2xl lg:text-3xl font-extrabold">
          Other tools
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {otherTools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-400 hover:bg-gray-800 cursor-none rounded-lg h-[130px] p-3 flex flex-col justify-center items-center"
            >
              <p className="text-xl text-white">{tool.title}</p>
              <p className="text-sm text-white mt-2 text-center">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 w-full px-4 lg:px-0">
        <JobsPage />
        <AcademicPage />
        <WritingPage />
      </div>

      <div className="mt-10 w-full px-4 lg:px-0">
        <OrbitingCirclesDemo />
      </div>

      <div className="mt-10 w-full text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 gap-3">
          <FrequentlyAsked />
        </div>
      </div>

      <div className="mt-20 text-center w-full px-4 lg:px-0">
        <h2 className="text-4xl lg:text-5xl font-bold">Get started for free</h2>
        <p className="font-semibold text-sm lg:text-md mt-4">
          Take HypoGo for a spin today. No card required.
        </p>
        <Button className="my-3 p-2 mx-auto">
          Try HypoGo free
        </Button>
      </div>

      <div className="mt-20 w-full">
        <Pricing />
      </div>

      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
}
