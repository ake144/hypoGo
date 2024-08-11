'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from "@/components/ui/input"

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
      console.log(result.schedule);
      setStudyPlan(result.schedule); // Assuming the API returns a studyPlan object
    } catch (error) {
      console.error('Failed to generate study plan:', error);
    }
  };

  return (
    <div className="mt-20 mx-4">
      <h1  className='items-center justify-center text-2xl mx-[390px]'>AI-Driven Study Plan Generator</h1>
      <form onSubmit={handleSubmit}  className='flex lg:flex-row rounded-lg border mt-4 gap-9 mx-8'>
        <div className='flex flex-col gap-8'>
        <div>
          <h2>Subjects</h2>
          <Input
            type="text"
            placeholder="Add a subject"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
          />
          <Button  className='text-black hover:text-white bg-gray-100 my-2 ' type="button" onClick={addSubject}>
            Add Subject
          </Button>
          <ul>
            {subjects.map((subject, index) => (
              <li className='mx-3 p-2' key={index}>
                {subject} 
                <Button variant={'destructive'} className='mx-3' onClick={() => removeSubject(index)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <Input
          type="text"
          placeholder="Study Goals(daily, weekly...)"
          value={studyGoals}
          onChange={(e) => setStudyGoals(e.target.value)}
          required
        />

</div>
  <div  className='flex flex-col  mt-4 gap-9 mx-8'>
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
        <Button  className='mt-9 mx-6' type="submit">Generate Study Plan</Button>
      </form>


      <h2 className='my-10 text-2xl mx-20 justify-center items-center '>Your Study Plan</h2>
      {studyPlan && (
              
          
        <div  className='mx-4 p-2 rounded-md border my-4  '>
        
         <div className='mx-9 p-2  pb-2'>
          
                <pre  className='overflow-x-auto whitespace-pre-wrap '> {studyPlan} </pre> 
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyPlanPage;
