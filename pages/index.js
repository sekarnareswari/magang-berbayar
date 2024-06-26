import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const response = await axios.get("/api/jobs");
            setJobs(response.data);
        }

        fetchJobs();
    }, []);

    return (
        <div>
            <Navbar />
            <main className="p-4">
                <h1 className="text-3xl font-bold">Job Listings</h1>
                <ul>
                    {jobs.map((job) => (
                        <li key={job._id} className="border-b p-4">
                            <h2 className="text-2xl">{job.title}</h2>
                            <p>{job.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
}
