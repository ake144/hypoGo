'use client'

import { use, useEffect, useState } from "react";

const JobsPage = () => {
   
   const [jobs, setJobs] = useState<any>([]);

   useEffect(() => {
    const fetchJobs = async () => {
         fetch('/api/remote')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }
    fetchJobs();
}   , []);

    return <>
    <h1>Jobs</h1>
    <div>
        {jobs.map((job: any) => (
            <div key={job.id}>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
            </div>
        ))}
    </div>
    </>;
    }
    export default JobsPage;