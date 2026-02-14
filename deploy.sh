# AcelabTutors Deployment Script
# Usage: ./deploy.sh

LOG_FILE="deploy.log"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "-------------------------------------------"
echo "🚀 Starting Deployment at $(date)"
echo "-------------------------------------------"

# 1. Pull latest changes (optional if Hostinger already did it)
echo "📦 Checking for Git updates..."
if [ -d .git ]; then
    git pull origin main || echo "⚠️ Git pull failed or redundant (ignoring)"
else
    echo "⚠️ Not a git repository, skipping pull."
fi

# 2. Backend (Laravel) Updates
echo "🐘 Updating Backend..."
if [ -d backend ]; then
    cd backend
    composer install --no-interaction --prefer-dist --optimize-autoloader
    php artisan migrate --force
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
    cd ..
else
    echo "❌ Error: backend/ directory not found!"
fi

# 3. Frontend (Next.js) Updates
echo "⚛️ Updating Frontend..."
if [ -d frontend ]; then
    cd frontend
    npm install
    npm run build
    cd ..
else
    echo "❌ Error: frontend/ directory not found!"
fi

echo "✅ Deployment Complete at $(date)"
echo "-------------------------------------------"

