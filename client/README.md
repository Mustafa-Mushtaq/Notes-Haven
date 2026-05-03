# Try It:
https://notes-app-reactjs.onrender.com/

# Notes App

A simple React notes app built with Vite and Tailwind CSS.

## Overview

This project lets users create and delete notes using a clean two-panel interface:

- Add a note title
- Add note details
- Save notes to browser storage (localStorage)
- Delete notes individually

> Notes persist across browser sessions using localStorage.

## Features

- Create notes with title and description
- View saved notes in a responsive grid
- Delete notes with one click
- Persistent storage using browser localStorage
- Notes automatically saved and restored on page reload
- Built with React 19, Vite, and Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` — main notes UI and state management
- `src/main.jsx` — React entry point
- `src/index.css` — global styles
- `package.json` — scripts and dependencies

## NotesNotes are persisted in browser localStorage, so they survive page refreshes and browser restarts

This app is intended as a front-end practice project. For persistence, add browser storage (`localStorage`) or connect to a backend.
