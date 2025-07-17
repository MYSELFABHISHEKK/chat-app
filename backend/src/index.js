// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002; // fallback to 5002 if not defined

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", // Change this to match your frontend port
    credentials: true,
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

// Start server and connect DB
app.listen(PORT, () => {
    console.log(`✅ Server started on PORT: ${PORT}`);
    connectDB();
});
