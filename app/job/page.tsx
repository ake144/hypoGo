'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useState } from 'react';

const JobSearch = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('USA');
    const [keywords, setKeywords] = useState('it');


    const postedDate = (date:any)=>{
        const currentDate = new Date().getTime();
        const postedDate = new Date(date).getTime();
        const diffTime = Math.abs(currentDate - postedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays;
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        const url = process.env.job_url ||  ''; 
        const key = process.env.job_api_key || '';
        const params = {
            keywords,
            location
        };

        try {
            const response = await fetch(url + key, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            console.log(data)
            setJobs(data.jobs); 
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto mt-10 p-6">
           <div className="bg-white shadow-md rounded-lg p-6">
    <h1 className="text-3xl font-bold mb-4">Job Search</h1>
    <p className="text-gray-600 mb-6">Search for jobs using keywords in your preferred location</p>
    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Keywords</label>
                <Textarea
                    id="keywords"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <Textarea
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>

            <div className="flex flex-col justify-end w-[70px]">
                <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Search
                </Button>
            </div>
        </div>
    </form>
</div>


            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4 mx-10">Job Search Results</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    jobs.length === 0 ? (
                        <p  className='mx-6 p-6 font-semibold'>No jobs found</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job:any, index:number) => (
                                <div key={index} className="bg-white shadow-md my-2 rounded-lg p-4">
                                    <h3 className="text-xl font-semibold">{job.title}</h3>
                                    <p className="text-gray-600">{job.location}</p>
                                    <Badge variant="outline">{job.type}</Badge>

                                    <p  className='text-gray-60  text-sm'>{job.company}</p>
                                    <div  className='flex flex-row '> <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline items-start justify-start mt-2 block">View Job</a>  
                                                 <span  className='items-end text-sm justify-end right-0  ml-20 bottom-0 flex mt-2 '>{postedDate(job.updated)}  days ago</span>
                                   </div>        
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default JobSearch;
