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
    <div  className='mt-20 mx-3'>
      <h1 className='flex justify-center items-center text-2xl'>AI-powered Career Path Advisor</h1>
      <div className='flex flex-col gap-7 mx-11  lg:flex-row'> 
      <div>
        <label>
          Interests:
          <Input 
            type="text" 
            value={interests} 
            onChange={(e) => setInterests(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Skills:
          <Input 
            type="text" 
            value={skills} 
            onChange={(e) => setSkills(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Academic Background:
          <Input 
            type="text" 
            value={academicBackground} 
            onChange={(e) => setAcademicBackground(e.target.value)} 
          />
        </label>
      </div>

      
      <Button className='mt-5 p-4 mx-5 justify-end items-end flex' onClick={handleGenerateCareerPath}>
        Generate Career Path
      </Button>
      </div>
      <h2 className='my-5 text-2xl justify-center items-center flex'>Suggested Career Path:</h2>
      {careerAdvice && (
        <div className='rounded-lg border my-4  mx-9 p-2  pb-2  '>
          
          <pre  className='overflow-x-auto whitespace-pre-wrap p-5'> {careerAdvice} </pre> 
        </div>
      )}

</div>
    </>
  );
};

export default CareerPathAdvisor;
