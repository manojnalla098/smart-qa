# Smart Q&A API

A Node.js + Express backend that implements a Retrieval-Augmented Generation (RAG) pipeline using LLM to answer user questions based on stored documents.

## Features
- Document storage (MongoDB)
- RAG-based Q&A
- JWT Authentication
- Rate Limiting
- Structured LLM Response

## Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- LangChain / OpenAI API
- Zod (for structured output)

## Folder Structure

src/
├── controllers/
├── routes/
├── services/
├── models/
├── middleware/
├── config/
├── app.js
server.js

## Setup Instructions

### 1. Clone repository
git clone https://github.com/manojnalla098/smart-qa.git

### 2. Install dependencies
npm install

### 3. Create .env file

## Environment Variables

Create a `.env` file in root:

PORT=4000
MONGO_URI=mongodb+srv://smartqaai:smartqaai@cluster0.mongodb.net/smartqaai
JWT_SECRET=a3f9c8e7b2d14f6a9c0d3e5f8a7b6c1d4e9f2a0b3c6d7e8f9a1b2c3d4e5f6a7
OPENAI_API_KEY=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

## Run Project

### Start server
npm run dev

## API Endpoints

### 1. Get Documents
GET /api/docs

### 2. Register
POST /api/auth/register

Body:
{
  "email": "test@test.com",
  "password": "123456"
}

### 3. Login
POST /api/auth/login

### 4. Ask Question
POST /api/ask

Headers:
Authorization: Bearer <token>

Body:
{
  "question": "What is refund policy?"
}

## Sample cURL

curl -X POST http://localhost:4000/api/ask \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_TOKEN" \
-d '{"question":"What is refund policy?"}'

## Sample Response

{
  "answer": "Refunds are processed within 5-7 business days.",
  "sources": ["doc_id_1"],
  "confidence": "high"
}

## Features Implemented

- Logs each request with userId, latency
- Rate limit: 10 requests/min per user
- JWT protected routes
- Structured LLM output

## Author

Nalla Manoj Kumar  
React.js,Node.js / Full Stack Developer