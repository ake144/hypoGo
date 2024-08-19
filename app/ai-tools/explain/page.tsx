'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import React from 'react';

export default function Home() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState<any>(null);

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/conver", {
        method: "POST",
        body: JSON.stringify({ prompt: input }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const resultText = await res.text();
      setText(resultText);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl lg:max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold mb-2">AI Tools</h4>
          <p className="text-lg text-gray-600">Simplify complex topics with AI</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          {isLoading && <p className="text-center text-blue-500">Loading...</p>}
          {error && <p className="text-center text-red-500">Error: {error.message}</p>}
          
          {text ? (
            <>
              <p className="text-sm font-bold text-gray-800 mb-4">{text}</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="prompt" className="text-md font-semibold">Topic</label>
                <input
                  id="prompt"
                  name="prompt"
                  value={input}
                  placeholder='Type here'
                  onChange={(e) => setInput(e.target.value)}
                  className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-semibold">👩🏻 Explain Like I am 10</h2>
              <h4 className="text-lg text-gray-700 mb-4">Simplify complex topics with AI</h4>
              <label htmlFor="prompt" className="text-md font-semibold">Topic</label>
              <input
                id="prompt"
                name="prompt"
                value={input}
                placeholder='Type here'
                onChange={(e) => setInput(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
