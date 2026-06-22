# InternX Pro - Setup & Deployment Guide

## Project Overview

InternX Pro is a full-stack web application connecting students with internship opportunities. The project consists of:

- **Backend**: Express.js REST API (Port 5000)
- **Frontend**: React + Vite + TailwindCSS (Port 5173)

## Project Structure

```
internx-pro-backend/
├── config/              # Database configuration
├── controllers/         # API controllers
├── middleware/         # Authentication & other middleware
├── models/            # Mongoose schemas
├── routes/            # API routes
├── internx-frontend/  # React frontend application
├── server.js          # Express server entry point
└── package.json       # Backend dependencies
```

## Backend Setup

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas URI)

### Installation

1. **Install Backend Dependencies**

   ```bash
   cd c:\Users\renee\internx-pro-backend
   npm install
   ```

2. **Configure Environment Variables**
   Create or update `.env` file:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/internx-pro
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   ```

3. **Start Backend Server**
   ```bash
   npm run dev
   # or for production
   npm start
   ```
   Server will run on `http://localhost:5000`

## Frontend Setup

### Prerequisites

- Node.js (v14+)
- Backend server running

### Installation

1. **Install Frontend Dependencies**

   ```bash
   cd internx-frontend
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Internships

- `GET /api/internships` - Get all internships
- `GET /api/internships/:id` - Get internship by ID
- `POST /api/internships` - Create internship (admin only)
- `PUT /api/internships/:id` - Update internship (admin only)
- `DELETE /api/internships/:id` - Delete internship (admin only)

### Applications

- `GET /api/applications` - Get user applications
- `POST /api/applications` - Submit application
- `PUT /api/applications/:id` - Update application
- `DELETE /api/applications/:id` - Cancel application

## Frontend Features

### Pages

1. **Home** - Landing page with features overview
2. **Login** - User authentication
3. **Register** - User registration
4. **Internships** - Browse and apply to internships

### Components

- **Navbar** - Navigation with responsive mobile menu
- **ProtectedRoute** - Route protection for authenticated users

### Context

- **AuthContext** - Global authentication state management

### Design Features

- ✨ Glass Morphism UI with blur effects
- 🎨 Smooth animations and transitions
- 📱 Fully responsive design
- 🌈 Beautiful gradient backgrounds
- ⚡ Fast performance with React + Vite

## Authentication Flow

1. User registers/logs in via frontend
2. Backend validates credentials and returns JWT token
3. Token stored in localStorage
4. Token automatically attached to API requests via interceptor
5. User can access protected routes

## Key Technologies

### Backend

- Express.js - Web framework
- Mongoose - MongoDB ODM
- JWT - Authentication
- bcryptjs - Password hashing
- CORS - Cross-origin requests

### Frontend

- React 19 - UI library
- Vite - Build tool
- React Router - Client-side routing
- Axios - HTTP client
- TailwindCSS - Styling

## Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **Debugging**: Use browser DevTools and Redux DevTools for debugging
3. **API Testing**: Use Postman or Insomnia to test API endpoints
4. **Styling**: Global styles in `index.css`, component styles in respective CSS files

## Production Deployment

### Backend Deployment (Heroku/Railway/Render)

```bash
npm run build
npm start
```

### Frontend Deployment (Vercel/Netlify)

```bash
npm run build
# Deploy the dist folder
```

## Troubleshooting

### CORS Issues

- Ensure backend CORS is configured correctly in `server.js`
- Frontend proxy is configured in `vite.config.js`

### MongoDB Connection

- Check MongoDB connection string in `.env`
- Ensure MongoDB server is running

### Port Already in Use

- Change PORT in `.env` for backend
- Vite automatically uses next available port for frontend

## Future Enhancements

- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Advanced filtering and search
- [ ] User profile customization
- [ ] Internship reviews and ratings
- [ ] Application status tracking

## Support

For issues or questions, refer to:

- Backend: Check Express.js documentation
- Frontend: Check React and Vite documentation
- Database: Check MongoDB documentation
