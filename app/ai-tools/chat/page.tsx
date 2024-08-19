'use client';

import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AIPage() {
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState<any>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: [{ role: 'user', content: input }] }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessages([...messages, { id: Date.now(), role: 'user', content: input }, { id: Date.now() + 1, role: 'ai', content: data.content }]);
    } else {
      console.error('Error:', data.error);
    }

    setInput('');
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <ScrollArea className="flex-1 mx-4 p-4 rounded-md border bg-white overflow-y-auto">
          {messages.map((message: any) => (
            <div key={message.id} className={`my-2 ${message.role === 'user' ? 'text-blue-600' : 'text-gray-600'}`}>
              <strong>{message.role === 'user' ? 'User: ' : 'AI: '}</strong>
              {message.content}
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleSubmit} className="p-4 flex items-center gap-2 bg-gray-100">
          <input
            name="prompt"
            value={input}
            placeholder='Type here...'
            onChange={handleInputChange}
            className='flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type="submit"
            className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
