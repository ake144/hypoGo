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
    <div className="mt-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-bold my-4 text-center">AI-Powered Cover Letter Generator</h1>
      <form onSubmit={handleSubmit} className="w-full bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="jobArea" className="block text-lg font-medium mb-2">Job Area</label>
        <input
          type="text"
          id="jobArea"
          name="jobArea"
          value={jobArea}
          placeholder="e.g., Software Engineering, Marketing"
          onChange={(e) => setJobArea(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="role" className="block text-lg font-medium mb-2">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          placeholder="e.g., Frontend Developer, Sales Manager"
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition w-full"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Cover Letter"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {coverLetter && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <h2 className="text-lg font-semibold">Generated Cover Letter</h2>
          <p className="mt-2 whitespace-pre-wrap">{coverLetter}</p>
        </div>
      )}
    </div>
  );
};

export default CoverLetter;
