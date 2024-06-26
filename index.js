import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/puublic/listings.json')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Job Listings</h1>
      <div className={styles.jobList}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.jobListing}>
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

