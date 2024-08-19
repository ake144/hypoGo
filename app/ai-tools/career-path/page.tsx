'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const CareerPathAdvisor = () => {
  const [interests, setInterests] = useState('');
  const [skills, setSkills] = useState('');
  const [academicBackground, setAcademicBackground] = useState('');
  const [careerAdvice, setCareerAdvice] = useState('');

  const handleGenerateCareerPath = async () => {
    const response = await fetch('/api/career', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ interests, skills, academicBackground }),
    });

    const data = await response.json();
    if (response.ok) {
      setCareerAdvice(data.careerAdvice);
    } else {
      console.error(data.error);
    }
  };

  return (
    <>
      <div className='mt-10 lg:mt-20 mx-4 lg:mx-16'>
        <h1 className='text-xl lg:text-2xl font-bold text-center mb-6'>AI-powered Career Path Advisor</h1>
        <div className='flex flex-col gap-6 lg:gap-8 lg:flex-row'>
          <div className='flex-1'>
            <label className='block mb-2 text-sm lg:text-md'>
              Interests:
              <Input 
                type="text" 
                value={interests} 
                onChange={(e) => setInterests(e.target.value)} 
                className='mt-1 block w-full'
              />
            </label>
          </div>
          <div className='flex-1'>
            <label className='block mb-2 text-sm lg:text-md'>
              Skills:
              <Input 
                type="text" 
                value={skills} 
                onChange={(e) => setSkills(e.target.value)} 
                className='mt-1 block w-full'
              />
            </label>
          </div>
          <div className='flex-1'>
            <label className='block mb-2 text-sm lg:text-md'>
              Academic Background:
              <Input 
                type="text" 
                value={academicBackground} 
                onChange={(e) => setAcademicBackground(e.target.value)} 
                className='mt-1 block w-full'
              />
            </label>
          </div>
        </div>

        <Button 
          className='mt-6 p-3 w-full lg:w-auto mx-auto block bg-blue-500 text-white' 
          onClick={handleGenerateCareerPath}
        >
          Generate Career Path
        </Button>

        <h2 className='my-6 text-xl lg:text-2xl text-center'>Suggested Career Path:</h2>
        {careerAdvice && (
          <div className='rounded-lg border my-4 mx-3 lg:mx-16 p-4'>
            <pre className='whitespace-pre-wrap'>{careerAdvice}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default CareerPathAdvisor;
