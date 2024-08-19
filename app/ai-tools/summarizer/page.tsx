'use client';

import { useState } from "react";

const SummarizerPage: React.FC = () => {
  const [summary, setSummary] = useState<string | null | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/summarize', {
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
      setSummary(result.summary);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 px-4 mx-4 sm:mx-8 lg:mx-16 flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">AI Summarizer</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <label htmlFor="prompt" className="block text-lg font-medium mb-2">Text to Summarize</label>
        <textarea
          id="prompt"
          name="prompt"
          value={prompt}
          placeholder="Type the text you want to summarize here"
          onChange={(e) => setPrompt(e.target.value)}
          className='w-full h-[180px] p-2 mb-4 border border-gray-300 rounded-lg'
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
      {summary && (
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-lg">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-2 whitespace-pre-wrap">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummarizerPage;
