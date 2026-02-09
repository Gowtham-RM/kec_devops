# Kongu Engineering College - Modern UI

A modern, responsive college website built with React + Vite for DevOps pipeline demonstrations.

## Features

✨ **Modern Design**
- Blue & white college theme
- Gradient hero sections
- Card-based layouts with shadows
- Smooth hover animations
- Fully responsive (mobile-friendly)

📄 **Pages**
- **Home**: Hero banner with tagline and 4 facility cards
- **About**: College information, vision, and mission cards
- **Departments**: 6 engineering departments in grid layout

🎨 **UI Components**
- Reusable Navbar with React Router
- Google Fonts (Poppins)
- Rounded buttons and modern spacing

## Tech Stack

- React 18
- Vite 5
- React Router 6
- CSS3 (No frameworks)

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm preview
```

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Home.jsx            # Home page with hero & facilities
│   ├── About.jsx           # About page with info cards
│   └── Departments.jsx     # Departments grid
├── styles/
│   └── global.css          # All styling
├── App.jsx                 # Router configuration
└── main.jsx                # Entry point
```

## Deployment Ready

This project is perfect for:
- DevOps CI/CD pipeline demonstrations
- Docker containerization
- Kubernetes deployment
- Jenkins/GitHub Actions workflows

## License

MIT License - Free to use for educational purposes
