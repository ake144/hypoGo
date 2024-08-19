'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from "@/components/ui/input";

const StudyPlanPage = () => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [studyGoals, setStudyGoals] = useState<string>('');
  const [availableTime, setAvailableTime] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const [studyPlan, setStudyPlan] = useState<any>(null);
  const [newSubject, setNewSubject] = useState<string>(''); // Temporary state for new subject input

  // Add subject to the subjects array
  const addSubject = () => {
    if (newSubject.trim()) {
      setSubjects([...subjects, newSubject.trim()]);
      setNewSubject(''); // Clear the input field
    }
  };

  // Remove a subject from the subjects array
  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/plan', {
        method: 'POST',
        body: JSON.stringify({
          subjects,
          studyGoals,
          availableTime,
          deadline,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response');
      }

      const result = await res.json();
      setStudyPlan(result.schedule); // Assuming the API returns a studyPlan object
    } catch (error) {
      console.error('Failed to generate study plan:', error);
    }
  };

  return (
    <div className="mt-10 mx-4 sm:mx-8 lg:mx-16">
      <h1 className='text-2xl md:text-3xl font-bold text-center mb-6'>AI-Driven Study Plan Generator</h1>
      <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-8'>
        <div className='flex flex-col gap-6 flex-1'>
          <div>
            <h2 className='text-xl font-semibold mb-2'>Subjects</h2>
            <Input
              type="text"
              placeholder="Add a subject"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
            />
            <Button className='mt-2 bg-gray-100 text-black hover:bg-gray-200' type="button" onClick={addSubject}>
              Add Subject
            </Button>
            <ul className='mt-4'>
              {subjects.map((subject, index) => (
                <li className='flex items-center justify-between p-2' key={index}>
                  {subject} 
                  <Button variant='destructive' className='ml-2' onClick={() => removeSubject(index)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <Input
            type="text"
            placeholder="Study Goals (daily, weekly...)"
            value={studyGoals}
            onChange={(e) => setStudyGoals(e.target.value)}
            required
          />
        </div>

        <div className='flex flex-col flex-1 gap-6'>
          <Input
            type="number"
            placeholder="Available Study Time (hours per day)"
            value={availableTime}
            onChange={(e) => setAvailableTime(e.target.value)}
            required
          />
          <Input
            type="date"
            placeholder="Deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
      </form>

      <Button className='mt-8 mx-auto block' type="submit" onClick={handleSubmit}>
        Generate Study Plan
      </Button>

      <h2 className='mt-10 text-2xl font-semibold text-center'>Your Study Plan</h2>
      {studyPlan && (
        <div className='mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg mx-4'>
          <pre className='whitespace-pre-wrap'>{studyPlan}</pre>
        </div>
      )}
    </div>
  );
};

export default StudyPlanPage;
