@echo off
title Starting Development Servers
echo ==========================================
echo    Starting Development Environment
echo ==========================================

echo Starting backend server...
start "Backend Server" cmd /k "cd /d %~dp0backend && npm start"

timeout /t 3 /nobreak >nul
echo Starting frontend server...
start "Frontend Server" cmd /k "cd /d %~dp0frontend && npm run dev"

echo ==========================================
echo ✅ Both servers are starting!
echo Backend: http://localhost:8000
echo Frontend: http://localhost:5173
echo ==========================================
echo Press any key to close this window...
pause >nul