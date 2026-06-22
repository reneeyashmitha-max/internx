# Quick Start Guide - InternX Pro

## 🚀 Start Here

### Step 1: Install & Run Backend

```bash
cd c:\Users\renee\internx-pro-backend
npm install
npm run dev
```

✅ Backend will be available at: `http://localhost:5000`

### Step 2: Install & Run Frontend (in a new terminal)

```bash
cd c:\Users\renee\internx-pro-backend\internx-frontend
npm install
npm run dev
```

✅ Frontend will be available at: `http://localhost:5173`

### Step 3: Open in Browser

Go to `http://localhost:5173` and start exploring!

---

## 📖 What's New

### New Files Created

#### Backend Configuration

- `vite.config.js` - API proxy configuration

#### Frontend Services

- `src/services/api.js` - Axios client with interceptors

#### Frontend Context

- `src/context/AuthContext.jsx` - Global authentication state

#### Frontend Components

- `src/components/Navbar.jsx` - Navigation component
- `src/components/Navbar.css` - Navigation styling
- `src/components/ProtectedRoute.jsx` - Route protection wrapper

#### Frontend Pages

- `src/pages/Home.jsx` - Landing page
- `src/pages/Home.css` - Landing page styling
- `src/pages/Login.jsx` - Login page
- `src/pages/Register.jsx` - Registration page
- `src/pages/Auth.css` - Auth pages styling
- `src/pages/Internships.jsx` - Internships listing
- `src/pages/Internships.css` - Internships styling

#### Frontend Configuration

- `src/App.jsx` - Main app with React Router
- `src/App.css` - App styling
- `src/index.css` - Global styles with animations

#### Documentation

- `SETUP_GUIDE.md` - Comprehensive setup guide
- `INTEGRATION_SUMMARY.md` - Integration overview
- `QUICK_START.md` - This file

### Deleted Files/Folders

- ❌ `/client` - Old client folder
- ❌ `/internx-pro` - Duplicate project folder
- ❌ `/internx-frontend/src/assets` - Vite boilerplate assets

---

## 🎯 Features

### Authentication

- ✅ User registration
- ✅ User login
- ✅ JWT token management
- ✅ Automatic token injection in API requests

### Internships

- ✅ View all internships
- ✅ Filter by duration
- ✅ Apply to internships
- ✅ Track application status

### UI/UX

- ✅ Glass morphism design
- ✅ Smooth animations
- ✅ Responsive mobile design
- ✅ Beautiful gradients
- ✅ Interactive hover effects

---

## 🔗 API Integration

All API calls are made through the configured proxy:

```
Frontend → http://localhost:5173
         → Proxy to http://localhost:5000/api/
         → Backend
```

### Example Flow

1. User clicks "Apply Now"
2. Frontend sends: `POST /api/applications`
3. Axios adds JWT token automatically
4. Backend processes request
5. Frontend shows success/error

---

## 📱 Mobile Responsive

- **Desktop**: Full layout with multi-column grids
- **Tablet**: Adjusted spacing, 2-column layout
- **Mobile**: Single column, hamburger menu

---

## 🎨 Design System

### Colors

- Primary Blue: `#6366f1`
- Secondary Purple: `#8b5cf6`
- Accent Orange: `#fbbf24`

### Animations

- Smooth transitions: 0.3-0.6 seconds
- Staggered animations for cards
- Float effects for backgrounds
- Bounce animations for icons

### Glass Morphism

All cards use:

- Backdrop blur (10px)
- Transparent white background
- Subtle border
- Soft shadow

---

## 🐛 Troubleshooting

### Backend won't start

- Check if port 5000 is available
- Verify MongoDB connection in .env
- Run `npm install` if modules missing

### Frontend won't connect to backend

- Ensure backend is running on port 5000
- Check proxy config in `vite.config.js`
- Clear browser cache (Ctrl+Shift+Delete)

### Port already in use

- Kill process: `netstat -ano | findstr :5000`
- Or change PORT in `.env`

---

## 📚 Project Organization

```
Frontend Structure
├── components/     → Reusable components
├── context/       → State management
├── pages/         → Full page components
├── services/      → API integration
└── CSS files      → Styling (one per file)

Backend Structure
├── models/        → Database schemas
├── controllers/   → Business logic
├── routes/        → API endpoints
├── middleware/    → Authentication
└── config/        → Database config
```

---

## ✨ Cool Features

1. **Persistent Authentication** - Users stay logged in after refresh
2. **Automatic Token Injection** - No manual token handling
3. **Beautiful Animations** - Smooth transitions everywhere
4. **Glass Effect** - Modern frosted glass look
5. **Responsive Design** - Works perfectly on all devices
6. **Error Handling** - User-friendly error messages
7. **Loading States** - Animated loading indicators

---

## 🎓 Learning Resources

- React: https://react.dev
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com
- Axios: https://axios-http.com
- Express: https://expressjs.com

---

## 🎉 You're All Set!

Your frontend and backend are now connected with:

- ✨ Beautiful animations
- 🎨 Glass morphism design
- 📱 Mobile responsiveness
- 🔒 Authentication system
- 🚀 Fast performance

Happy coding! 🚀
