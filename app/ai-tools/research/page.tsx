'use client'
import { useState } from "react";

const ResearchPage: React.FC = () => {
  const [researchPaper, setResearchPaper] = useState<string | null | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState<any>(null);

  const handleSubmit = async (e: any) => {
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
    <div className="mt-20 px-4 mx-20 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-3">AI Research Paper Writer</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="prompt" className="block text-lg font-medium mb-2">Research Paper Prompt</label>
        <textarea
          id="prompt"
          name="prompt"
          value={prompt}
          placeholder="Type the research paper prompt here"
          onChange={(e) => setPrompt(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-400 rounded'
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition w-full"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}
      {researchPaper && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded w-full max-w-md">
          <h2 className="text-lg font-semibold">Research Paper</h2>
          <p className="mt-2">{researchPaper}</p>
        </div>
      )}
    </div>
  );
};

export default ResearchPage;
