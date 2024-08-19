'use client'
import { useState } from "react";

const ResearchPage: React.FC = () => {
  const [researchPaper, setResearchPaper] = useState<string | null | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/research', {
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
      setResearchPaper(result.researchPaper);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold my-4 text-center">AI Research Paper Writer</h1>
      <form onSubmit={handleSubmit} className="w-full bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="prompt" className="block text-lg font-medium mb-2">Research Paper Prompt</label>
        <textarea
          id="prompt"
          name="prompt"
          value={prompt}
          placeholder="Type the research paper prompt here"
          onChange={(e) => setPrompt(e.target.value)}
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition w-full"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {researchPaper && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-md mx-auto">
          <h2 className="text-lg font-semibold">Research Paper</h2>
          <p className="mt-2 whitespace-pre-wrap">{researchPaper}</p>
        </div>
      )}
    </div>
  );
};

export default ResearchPage;
