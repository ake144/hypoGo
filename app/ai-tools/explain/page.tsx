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
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col mb-5">
          <h4 className="text-3xl p-4">AI Tools</h4>
          <p className="text-xl text-gray-600 ">Simplify complex topics with AI</p>
        </div>
        <div className="w-full lg:w-1/2 bg-blue-300 p-2 rounded-lg shadow-lg">
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-red-500">Error: {error.message}</p>}
          
          {text ? (
            <>
              <p className="text-sm font-bold text-gray-800">{text}</p>
            <form onSubmit={handleSubmit} className="flex flex-col mb-3">
              <label htmlFor="prompt" className="text-md">Topic</label>
              <input
                id="prompt"
                name="prompt"
                value={input}
                placeholder='Type here'
                onChange={(e) => setInput(e.target.value)}
                className='text-black w-full p-2 mb-2 border border-gray-400 rounded'
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
            </>
           

          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col mb-3">

                <h2 className="text-2xl">👩🏻 Explain Like I am 10</h2>
                <h4 className="text-xl text-gray-700 my-2">Simplify complex topics with AI</h4>
              <label htmlFor="prompt" className="text-md">Topic</label>
              <input
                id="prompt"
                name="prompt"
                value={input}
                placeholder='Type here'
                onChange={(e) => setInput(e.target.value)}
                className='text-black w-full p-2 mb-2 border border-gray-400 rounded'
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
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
