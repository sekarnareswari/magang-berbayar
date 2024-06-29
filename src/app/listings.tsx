"use client";

import { useEffect, useState } from "react";
import Listing from "./listing";

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
        <section id="listings">
            {jobs.map((job, index) => (
                <Listing
                    key={index}
                    logo={job.title}
                    company={job.company}
                    position={job.title}
                    location={job.location}
                    arrangement={job.title}
                    pay={job.title}
                    link={job.title}
                ></Listing>
            ))}
        </section>
    );
}
