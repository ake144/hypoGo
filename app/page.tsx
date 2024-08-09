"use client";

import Card from "@/components/card";
import { OrbitingCirclesDemo } from "@/components/cards";
import { FrequentlyAsked } from "@/components/frequently";
import { ScrollBasedVelocityDemo } from "@/components/testmonials";
import { Button } from "@/components/ui/button";
import {AcademicPage, JobsPage, WritingPage} from "@/components/tools";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";
import React from 'react';

export default function Home() {
  const tools = [
    {
      link:'/ai-tools/summarizer',
      title:'📝 summarizer',
      description:'Summarize any text with a click of a button. Get the main points of any article or document in seconds.',
    },
    {
      link:'/ai-tools/explain',
    title:' 🧒🏻 Explain Like I am 10',
    description:'make complex  topics simple. Explain any topic in simple terms. Great for students and teachers.',
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

const otherTools = [
  {
    title:'Forum',
    description:'Join the community and get help from other'
  },
  {
    title:'Blog',
    description:'Read the latest articles and stay up to date with the latest trends'
  },
   
  {
    title:'Courses',
    description:'Learn new skills and advance your career with our online courses'
  },

  {
    title:'Webinars',
    description:'Attend live webinars and learn from experts in the field'
  },
  {
    title:'Podcast',
    description:'Listen to our podcast and get inspired by the stories of successful people'
  },
  {
    title:'Book Club',
    description:'Join our book club and discuss the latest books with other members'
  },

  {
    title:'Events',
    description:'Attend our events and meet other members of the community'
  },
{
    title:'Resources',
    description:'Get access to resources that will help you learn and grow',
  },

]


  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="w-1/2 mt-20">
         <h2 className="text-6xl  justify-center items-center font-bold font-serif ">Write, Research, Learn and Work with HypoGo</h2>
          <p className="text-md font-semibold  items-center justify-center mx-[90px] my-4  ">HypoGo delivers high-quality writing. Instantly tap into a wealth of knowledge with real-time search and citations. simplify complex topics write with the power of AI.</p>
         <Link href='#tools'>
            <Button  className="mx-[140px] my-5">
                    Get Started for free
            </Button>
         </Link>
      </div>
      <div className="mt-20">
            <h3  className="mx-[100px] my-5 text-3xl  font-extrabold">Hundreds of powerful tools to transform your work</h3>

            <div  className="grid lg:grid-cols-3 grid-cols-2 ">
                {
                  tools.map((tool, index)=>(
                    <Link key={index} href={tool.link} className="bg-gray-400 hover:bg-gray-800 rounded-lg h-[130px]  my-3 mx-3 p-3 justify-center items-center">
                        <p className="text-xl text-white items-center justify-center my-3"> {tool.title}</p>
                        <p className="text-sm text-white items-center justify-center my-2 ">{tool.description}</p>
                   </Link>

                  ))
                }
         </div>
      </div>

      <div className="mt-20">
            <h3 id='tools' className="mx-[100px] my-5 text-3xl  font-extrabold">other tools</h3>
            <div  className="grid lg:grid-cols-3 grid-cols-2 ">
              {otherTools.map((tool, index)=>(
            <Link key={index} href='' className="bg-gray-400 hover:bg-gray-800 rounded-lg h-[130px]  my-3 mx-3 p-3 justify-center items-center">
                        <p className="text-xl text-white items-center justify-center my-3"> {tool.title}</p>
                        <p className="text-sm text-white items-center justify-center my-2 ">{tool.description}</p>
                   </Link>
              ))}
              
             </div>
      </div>
      <div className="mt-20">
        <JobsPage />
        < AcademicPage />
        <WritingPage />
      </div>
      <div className="mt-10 w-full">
        <OrbitingCirclesDemo />
      </div>

      {/* <div>
        <ScrollBasedVelocityDemo />
        
      </div> */}
      <div>
            <h2 className="text-3xl mt-20 items-center justify-center font-bold ">Frequently Asked Questions</h2>
            
            <div className="mt-8 gap-3">
            <FrequentlyAsked/>
            </div>
      </div>

      <div>
           <h2 className="text-5xl font-bold mt-20 my-4">Get started for free</h2>
               <p  className="font-semibold text-md items-center justify-center mx-8 my-4">Take HypoGo for a spin today. No card required.</p>
               <Button  className="my-3 mx-20 p-2 justify-center items-center">
                    try HypoGo free
               </Button>
      </div>
        
   </div>
     
  );
}