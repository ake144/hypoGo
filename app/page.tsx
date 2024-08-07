"use client";

import Card from "@/components/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from 'react';

export default function Home() {
  const tools = [
    {
      title: "Summarizer",
      description: "Summarize text",
      link: "/ai-tools/summarize",
    },
    {
      title: "Essay",
      description: "Generate an essay",
      link: "/ai-tools/essay",
    },
    {
      title: "Simple Explanation",
      description: "Simplify complex topics",
      link: "/ai-tools",
    },
    {
      title: "Math Solver",
      description: "Solve math problems",
      link: "/ai-tools/math",
    },
    {
      title: "Research Writer",
      description: "Generate research papers",
      link: "/ai-tools/research",
    },
    {
      title: "Chat",
      description: "Chat with an AI",
      link: "/ai-tools/chat",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col  justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full ">
          <h2 className="text-2xl justify-center items-center flex">AI-Tools for Student</h2>
          <p className="text-md justify-center items-center flex text-gray-700 font-extralight">Have a nice study time</p>
          <div className="mt-20 p-2">
            <h3>Explore the AI tools</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="rounded-lg border p-4 h-auto overflow-hidden border-b-indigo-950">
                  <Card title={tool.title} description={tool.description} link={tool.link} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}