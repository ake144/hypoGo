'use client';

import { Button } from "@/components/ui/button";
import { AcademicPage, JobsPage, WritingPage } from "@/components/tools";
import { OrbitingCirclesDemo } from "@/components/cards";
import { FrequentlyAsked } from "@/components/frequently";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  const tools = [
    {
      link: "/ai-tools/summarizer",
      title: "📝 Summarizer",
      description: "Summarize any text with a click of a button. Get the main points of any article or document in seconds.",
    },
    {
      link: "/ai-tools/career-path",
      title: "Career Path Advisor",
      description: "Analyze a user's skills, interests, and academic history to suggest potential career paths.",
    },
    {
      link: "/ai-tools/explain",
      title: "🧒🏻 Explain Like I am 10",
      description: "Make complex topics simple. Explain any topic in simple terms. Great for students and teachers.",
    },
    {
      link: "/ai-tools/re-write",
      title: "✍🏻 Rewrite Content",
      description: "Rewrite any text with a click of a button. Get a fresh perspective on any topic.",
    },
    {
      link: "/ai-tools/programming",
      title: "👩‍💻 Learn Programming",
      description: "Learn programming with real-time code examples. Get instant feedback on your code.",
    },
    {
      link: "/ai-tools/essay",
      title: "✍ Essay",
      description: "Write an essay with a click of a button. Get a fresh perspective on any topic.",
    },
    {
      link: "/ai-tools/research",
      title: "🔍 Research",
      description: "Research any topic with a click of a button. Get a fresh perspective on any topic.",
    },
    {
      link: "/ai-tools/interview",
      title: "🗣 Interview Prep",
      description: "Prepare for your next interview with real-time feedback. Get instant feedback on your answers.",
    },
    {
      link: "/ai-tools/letter",
      title: "📚 Cover Letter",
      description: "Write a cover letter with a click of a button. Get a fresh perspective on any topic.",
    },
  ];

  const otherTools = [
    {
      title: "Forum",
      description: "Join the community and get help from others.",
    },
    {
      title: "Blog",
      description: "Read the latest articles and stay up to date with the latest trends.",
    },
    {
      title: "Courses",
      description: "Learn new skills and advance your career with our online courses.",
    },
    {
      title: "Webinars",
      description: "Attend live webinars and learn from experts in the field.",
    },
    {
      title: "Podcast",
      description: "Listen to our podcast and get inspired by the stories of successful people.",
    },
    {
      title: "Book Club",
      description: "Join our book club and discuss the latest books with other members.",
    },
    {
      title: "Events",
      description: "Attend our events and meet other members of the community.",
    },
    {
      title: "Resources",
      description: "Get access to resources that will help you learn and grow.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-12 ">
      <div className="mt-20  md:mt-[150px]">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Empower Your Work with HypoGo
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover our range of tools designed to simplify your work, enhance learning, and boost productivity.
        </p>
        <Link href="#tools">
          <Button className="text-xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Get Started for Free
          </Button>
        </Link>
      </section>

      {/* Main Tools Section */}
      <section id="tools" className="w-full max-w-6xl px-4 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Powerful Tools to Transform Your Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.link} className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">{tool.title}</div>
                <p className="text-gray-700">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/ai-tools">
          <Button className="mt-8 text-xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Explore More
          </Button>
        </Link>
      </section>

      {/* Other Tools Section */}
      <section className="w-full max-w-6xl px-4 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {otherTools.map((tool, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
              <div className="text-2xl mb-3">{tool.title}</div>
              <p className="text-gray-700">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Sections */}
      <section className="w-full px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore Our Features</h3>
            <JobsPage />
            <AcademicPage />
            <WritingPage />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Demos</h3>
            <OrbitingCirclesDemo />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <FrequentlyAsked />
      </section>

      {/* Call to Action Section */}
      <section className="w-full px-4 mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started for Free</h2>
        <p className="text-lg text-gray-600 mb-6">Take HypoGo for a spin today. No credit card required.</p>
        <Link href="#tools">
          <Button className="text-xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Try HypoGo Free
          </Button>
        </Link>
      </section>

      {/* Pricing and Footer */}
      <section className="w-full px-4 mt-12">
        <Pricing />
      </section>
      <div className="w-full mt-12" >
           <Footer />
       </div>
      </div>
    </div>
  );
}
