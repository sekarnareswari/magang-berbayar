# Magang Berbayar
This project is a job board platform that allows users to view job listings and get directed to the respective job portals. It is built using React, Tailwind CSS, Next.js, Python, and MongoDB, and hosted on Vercel.

## Table of Contents
Getting Started
Prerequisites
Installation
Running the Project
Project Structure
API Routes
Database Schema
Deployment
Contributing
License
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Node.js (version 14.x or later)
npm (version 6.x or later) or yarn (version 1.x or later)
Python (version 3.x)
MongoDB (local installation or MongoDB Atlas)
Git
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/job-board.git
cd job-board
Install dependencies:
bash
Copy code
npm install
# or
yarn install
Set up MongoDB:
If you are using a local MongoDB instance, ensure that MongoDB is running on mongodb://localhost:27017.
If you are using MongoDB Atlas, create a new cluster and get the connection string.
Set up environment variables:
Create a .env.local file in the root of the project and add the following:

env
Copy code
MONGODB_URI=mongodb://localhost:27017/job-board
# or
MONGODB_URI=your-mongodb-atlas-connection-string

NEXT_PUBLIC_API_URL=http://localhost:3000/api
