"use client"
import { useEffect, useState } from 'react';
//import styles from '../styles/Home.module.css';

interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
}

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('../../../public/joblistings.json')
      .then((response) => response.json())
      .then((data: Job[]) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div >
      <h1>Job Listings</h1>
      <div >
        {jobs.map((job, index) => (
          <div key={index}>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

