'use client'

import { useState } from "react";

const CoverLetter: React.FC = () => {
  const [coverLetter, setCoverLetter] = useState<string | null>('');
  const [isLoading, setIsLoading] = useState(false);
  const [jobArea, setJobArea] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/letter', {
        method: "POST",
        body: JSON.stringify({ jobArea, role }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to generate cover letter');
      }

      const result = await res.json();
      setCoverLetter(result.coverLetter);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20 px-4 mx-20 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-3">AI-Powered Cover Letter Generator</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="jobArea" className="block text-lg font-medium mb-2">Job Area</label>
        <input
          type="text"
          id="jobArea"
          name="jobArea"
          value={jobArea}
          placeholder="e.g., Software Engineering, Marketing"
          onChange={(e) => setJobArea(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />

        <label htmlFor="role" className="block text-lg font-medium mb-2">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          placeholder="e.g., Frontend Developer, Sales Manager"
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-400 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition w-full"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Cover Letter"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}
      {coverLetter && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded w-full max-w-md">
          <h2 className="text-lg font-semibold">Generated Cover Letter</h2>
          <p className="mt-2">{coverLetter}</p>
        </div>
      )}
    </div>
  );
};

export default CoverLetter;
