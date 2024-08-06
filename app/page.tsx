'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import React from 'react';

export default function Home() {
  const [text, setText] = useState("");
  const [quotes, setQuotes] = useState<any>([]);

  useEffect(() => {
    fetch("/api/conver", {
      method: "POST",
      body: JSON.stringify({
        prompt: "Explain water.",
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setText(text);
      });
  }, []);

 

  console.log(quotes);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-bold text-gray-800">{text}</p>
        </div>
      </div>
    </main>
  );
}
