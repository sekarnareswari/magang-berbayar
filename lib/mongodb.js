import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDatabase() {
    if (!client.isConnected()) await client.connect();
    return client.db("job-board");
}

export { connectToDatabase };
