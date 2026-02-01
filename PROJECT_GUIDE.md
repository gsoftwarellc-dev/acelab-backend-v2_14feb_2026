# Project Architecture Guide

This project uses a monorepo-style structure separating the frontend and backend.

## Structure

- **frontend/**: Next.js application (React)
- **backend/**: PHP Laravel application (API)

## Backend (Laravel)
- **Framework**: Laravel 11.x (PHP 8.2+)
- **Database**: MySQL
- **Role**: REST API handling authentication, payments (Stripe), and business logic.
- **API URL**: `http://localhost:8000/api`

## Frontend (Next.js)
- **Framework**: Next.js 14+ (App Router)
- **Build**: Static Export (`output: 'export'`)
- **Role**: UI/UX. Communicates with Backend via API calls.
- **Dev Server**: `http://localhost:3000`

## Development

**Terminal 1 (Backend):**
```bash
cd backend
php artisan serve
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
