import express from 'express';
import authRouter from './routes/auth.routes.js';
import notesRouter from './routes/notes.routes.js'
import cookieparser from 'cookie-parser';
import cors from "cors";



const app = express();

app.use(cors({
  origin: "http://localhost:5173", // your React app
  credentials: true
}));
app.use(cookieparser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to Notes App");
});

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

export default app;