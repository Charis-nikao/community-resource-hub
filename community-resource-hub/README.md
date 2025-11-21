# Community Resource Hub

A MERN-stack scaffold for a Community Resource & Support Hub.
This repository contains a backend (Express + MongoDB + Socket.io) and a frontend (React + Vite).

## Quick start (local with Docker Compose)
1. Copy env files:
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env`
2. Start containers:
   - `docker-compose up --build`
3. Seed sample data (optional):
   - `docker-compose exec backend npm run seed`
4. Visit frontend at `http://localhost:3000` and backend at `http://localhost:5000/api`

## Quick start (local without Docker)
Backend:
```
cd backend
cp .env.example .env
npm install
npm run seed
npm run dev
```

Frontend:
```
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Features implemented
- Auth (register/login) with JWT.
- Requests CRUD (create, list, details, match).
- Donations & Events endpoints.
- Socket.io chat backend + client page.
- Seed script for sample data.
- Docker & docker-compose for easy local dev.
- Basic GitHub Actions CI for lint/test/build.

