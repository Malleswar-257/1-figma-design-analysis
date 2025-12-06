@echo off
title Installing Dependencies
echo ==========================================
echo    Installing Project Dependencies
echo ==========================================

echo [1/2] Installing frontend dependencies...
cd frontend
if exist package.json (
    npm install
    echo ✅ Frontend dependencies installed
) else (
    echo ❌ No package.json found in frontend
)
cd ..

echo [2/2] Installing backend dependencies...
cd backend
if exist package.json (
    npm install
    echo ✅ Backend dependencies installed
) else (
    echo ❌ No package.json found in backend
)
cd ..

echo ==========================================
echo ✅ All dependencies installed successfully!
echo ==========================================
pause