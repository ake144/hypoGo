'use client'

import { useEffect, useState } from "react";

const MathPage: React.FC = () => {
  const [answer, setAnswer] = useState<string | null | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
  const [problem, setProblem] = useState('');
  const [subject, setSubject] = useState('math'); // New state for subject
  const [error, setError] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/math", {
        method: "POST",
        body: JSON.stringify({ problem, subject }), // Send both problem and subject
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const resultAns = await res.json();
      setAnswer(resultAns.answer);
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20 px-4 mx-20 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-3">Solutions to Your Questions</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="problem" className="block text-lg font-medium mb-2">Problem</label>
        <textarea
          id="problem"
          name="problem"
          value={problem}
          placeholder="Type your problem here"
          onChange={(e) => setProblem(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-400 rounded'
          rows={4}
        />
        <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
        <select
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-400 rounded'
        >
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="economics">Economics</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition w-full"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}
      {answer && (
        <div className="mt-4 p-4  mb-5 bg-gray-100 border border-gray-300 rounded w-full max-w-md">
          <h2 className="text-lg font-semibold">Answer</h2>
          <p className="mt-2">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default MathPage;
