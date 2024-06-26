// pages/api/jobs.js
import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const jobs = await db.collection("jobs").find({}).toArray();
    res.status(200).json(jobs);
};
