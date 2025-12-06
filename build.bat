@echo off
title Building Production Version
echo ==========================================
echo    Building Production Version
echo ==========================================

echo Building frontend for production...
cd frontend
if exist package.json (
    npm run build
    echo ✅ Frontend build completed
) else (
    echo ❌ No package.json found
)
cd ..

echo ==========================================
echo ✅ Production build complete!
echo Check frontend/dist folder for output
echo ==========================================
pause