"use client";

import { useEffect, useState } from "react";
import Listing from "./listing";
import Container from "./components/container";

interface ListingProps {
    logo: string;
    company: string;
    position: string;
    location: string;
    arrangement: string;
    pay: string;
    link: string;
}

export default function Listings() {
    const [listing, setJobs] = useState<ListingProps[]>([]);

    useEffect(() => {
        fetch("/joblistings.json")
            .then((response) => response.json())
            .then((data: ListingProps[]) => setJobs(data))
            .catch((error) => console.error("Error fetching jobs:", error));
    }, []);

    return (
        <section id="listings">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-24 gap-4 md:gap-8">
                {listing.map((job, index) => (
                    <Listing
                        key={index}
                        logo={job.logo}
                        company={job.company}
                        position={job.position}
                        location={job.location}
                        arrangement={job.arrangement}
                        pay={job.pay}
                        link={job.link}
                    />
                ))}
            </Container>
        </section>
    );
}
