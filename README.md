# VibeCheck 411L - API & Frontend Project

## Project Overview
A full-stack web application for checking developer vibes, getting fortunes, jokes, and smashing away stress! Built with Node.js/Express backend and vanilla JavaScript frontend.

## Features

### Backend API Endpoints
- GET /api/fortune - Returns random developer fortunes
- GET /api/joke - Returns random programming jokes
- GET /api/vibe?mood= - Checks vibe for happy/tired/stressed moods
- POST /api/smash - Increments smash counter
- GET /api/smashes - Returns current smash count
- POST /api/smash/reset - Resets smash counter
- GET /api/secret?code=411L - Hidden secret endpoint
- GET /api/ping - Health check endpoint
- GET /api/status - Server status information

### Frontend Features
- Modern UI Design with gradient backgrounds and animations
- Fully Responsive layout for mobile and desktop
- Beautiful Response Cards instead of raw JSON
- Real-time Updates with loading states
- FontAwesome Icons for enhanced UX
- Interactive Buttons with hover effects

## Tech Stack

### Backend
- Node.js - JavaScript runtime
- Express - Web framework
- CORS - Cross-origin resource sharing

### Frontend
- Vanilla JavaScript - No frameworks
- Modern CSS3 - Flexbox, Grid, CSS Variables
- FontAwesome - Icon library
- Fetch API - For HTTP requests

## Project Structure
VibeCheck-MercadoRagragioRodriguez/
├── backend/
│   ├── index.js          # Main Express server
│   └── package.json      # Dependencies and scripts
├── frontend/
│   ├── index.html        # Main HTML page
│   ├── style.css         # Modern CSS styling
│   └── app.js            # Frontend JavaScript
└── README.md             # Documentation

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Git

### Backend Setup
1. Clone repository: git clone https://github.com/elijarodriguez/VibeCheck-MercadoRagragioRodriguez.git
2. cd VibeCheck-MercadoRagragioRodriguez/backend
3. npm install
4. npm start
5. Server runs on http://localhost:3000

### Frontend Setup
Open index.html in browser or use Live Server extension

## How to Use
1. Start the backend server: npm start in backend folder
2. Open frontend: Open index.html in browser
3. Interact with buttons:
   - Fortune - Get developer wisdom
   - Joke - Get programming humor
   - Happy/Tired/Stressed - Check your vibe
   - SMASH! - Release stress (increases counter)
   - Reset - Reset smash counter
   - Secret - Unlock hidden message (code: 411L)

## API Documentation

### Base URL
http://localhost:3000

### Endpoints
- GET /api/fortune - Random fortune
- GET /api/joke - Random joke
- GET /api/vibe?mood=happy - Mood check
- POST /api/smash - Increment counter
- GET /api/smashes - Get counter
- POST /api/smash/reset - Reset counter
- GET /api/secret?code=411L - Secret message

## Git Workflow

### Branches Created
1. feature/api-routes - Added /api/ping and /api/status endpoints
2. feature/smash-counter - Added reset functionality and button
3. feature/frontend-ui - Modern UI design with responsive cards

### Workflow Process
1. Create feature branch from main
2. Make at least 2 meaningful commits
3. Push to GitHub
4. Create Pull Request
5. Partner reviews and comments
6. Merge to main

## Team Members
- John Elija Rodriguez 
- Mark Justin Ragragio
- Kurt Draco Mercado 

## Quick Start Commands
# Clone and setup
git clone https://github.com/elijarodriguez/VibeCheck-MercadoRagragioRodriguez.git
cd VibeCheck-MercadoRagragioRodriguez

# Backend
cd backend
npm install
npm start

# Frontend
cd ../frontend
# Open index.html in browser

Server Status: http://localhost:3000/api/ping
Frontend: Open index.html in any modern browser

Made with ❤️ for CPE 411L - Full Stack Development
"You passed the vibe check today. 😎"
