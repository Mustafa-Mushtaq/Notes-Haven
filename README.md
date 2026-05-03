# Notes Haven

A full-stack web application for creating, managing, and organizing personal notes with user authentication.

## 🎯 Features

- **User Authentication**: Secure login and registration system
- **Create Notes**: Add new notes with ease
- **View Notes**: Display all your notes on the home page
- **Note Management**: Organized note display with card-based UI
- **Responsive Design**: Works seamlessly on different screen sizes
- **Loading States**: Visual feedback during data fetching

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **JavaScript/JSX** - Programming language
- **CSS** - Styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication

## 📁 Project Structure

```
Notes-Haven/
├── client/                    # Frontend application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Loader.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   └── NoteForm.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── services/         # API calls
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles
│   ├── vite.config.js
│   └── package.json
│
└── server/                   # Backend application
    ├── src/
    │   ├── config/           # Configuration
    │   │   └── db.js        # Database connection
    │   ├── controllers/      # Route handlers
    │   │   ├── auth.controller.js
    │   │   └── notes.controller.js
    │   ├── middlewares/      # Custom middleware
    │   │   └── auth.middleware.js
    │   ├── models/           # Data models
    │   │   ├── user.models.js
    │   │   └── note.models.js
    │   ├── routes/           # API routes
    │   │   ├── auth.routes.js
    │   │   └── notes.routes.js
    │   └── app.js
    ├── server.js             # Entry point
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Notes-Haven
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create a `.env` file in the `server` directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notes-haven
JWT_SECRET=your_secret_key_here
```

### Running the Application

**Terminal 1 - Start Backend Server**
```bash
cd server
npm start
```

**Terminal 2 - Start Frontend Development Server**
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port).

## 📝 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Notes Routes
- `GET /api/notes` - Fetch all notes for authenticated user
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
- Users register/login to receive a JWT token
- Token is stored in localStorage (client-side)
- Token is included in request headers for protected routes
- Auth middleware validates the token on the backend

## 📦 Available Scripts

### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Server
```bash
npm start        # Start server
npm run dev      # Start with nodemon (auto-reload)
```

## 🎨 Components

- **Loader** - Loading spinner component
- **NoteForm** - Form for creating/editing notes
- **NoteCard** - Individual note display component

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a full-stack learning project.

---

For questions or support, please open an issue in the repository.
