#!/bin/bash

# AcelabTutors Deployment Script
# Usage: ./deploy.sh

echo "🚀 Starting Deployment..."

# 1. Pull latest changes
echo "📦 Pulling latest changes from Git..."
git pull origin main

# 2. Backend (Laravel) Updates
echo "🐘 Updating Backend..."
cd backend

# Install PHP dependencies (optimized for production)
echo "   - Installing Composer dependencies..."
composer install --no-interaction --prefer-dist --optimize-autoloader

# Run Database Migrations
echo "   - Running Database Migrations..."
php artisan migrate --force

# Clear and Cache Configuration
echo "   - Optimizing Configuration & Routes..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Restart Queue Worker (if using supervisor, otherwise skip)
# echo "   - Restarting Queue Worker..."
# php artisan queue:restart

cd ..

# 3. Frontend (Next.js) Updates
echo "⚛️ Updating Frontend..."
cd frontend

# Install Node dependencies
echo "   - Installing NPM dependencies..."
npm install

# Build the application
echo "   - Building Next.js app..."
npm run build

# Note: On some shared hosting, you might need to restart the Node process manually 
# or via a manager like PM2. If using PM2:
# pm2 restart acelabtutors

cd ..

echo "✅ Deployment Complete! Website is live with latest changes."
