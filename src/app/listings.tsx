"use client";

import { useEffect, useState } from "react";

interface Job {
    title: string;
    company: string;
    location: string;
    description: string;
}

export default function Listings() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        fetch("/joblistings.json")
            .then((response) => response.json())
            .then((data: Job[]) => setJobs(data))
            .catch((error) => console.error("Error fetching jobs:", error));
    }, []);

    return (
        <div>
            {jobs.map((job, index) => (
                <div key={index}>
                    <h2>{job.title}</h2>
                    <p>
                        <strong>Company:</strong> {job.company}
                    </p>
                    <p>
                        <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                        <strong>Description:</strong> {job.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
