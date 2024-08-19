'use client'

import { useState } from "react";

const EssayPage: React.FC = () => {
  const [essay, setEssay] = useState<string | null | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/essay', {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      setEssay(result.essay);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20 px-4 mx-auto max-w-screen-sm sm:px-6 lg:max-w-screen-md">
      <h1 className="text-2xl font-bold my-4 text-center">AI Essay Writer</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <label htmlFor="prompt" className="block text-lg font-medium mb-2">Essay Prompt</label>
        <textarea
          id="prompt"
          name="prompt"
          value={prompt}
          placeholder="Type the essay prompt here"
          onChange={(e) => setPrompt(e.target.value)}
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition w-full"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {essay && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm w-full">
          <h2 className="text-lg font-semibold">Essay</h2>
          <p className="mt-2">{essay}</p>
        </div>
      )}
    </div>
  );
};

export default EssayPage;
