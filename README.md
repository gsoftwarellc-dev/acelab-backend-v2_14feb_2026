# AceLabTutors Platform

## Project Structure

This project is divided into two main components:

- **[frontend/](./frontend)**: The Next.js user interface.
- **[backend/](./backend)**: The Laravel API.

## Quick Start

### Prerequisites
- Node.js & npm
- PHP & Composer
- MySQL

### Setup

1. **Install Dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Backend
   cd backend
   composer install
   ```

2. **Run Locally**
   
   Open two terminal tabs:
   
   ```bash
   # Tab 1: Backend
   cd backend
   php artisan serve
   ```
   
   ```bash
   # Tab 2: Frontend
   cd frontend
   npm run dev
   ```
