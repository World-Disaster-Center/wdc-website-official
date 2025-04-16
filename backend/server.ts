import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import dotenv from "dotenv";

// Import Routes
import roasterRoutes from "./routes/roaster";
import localAuthRoutes from "./routes/localAuthRoutes";
import professionalAuthRoutes from "./routes/professionalAuthRoutes";
import twilioRoutes from "./routes/twilioRoutes";
import contactRoutes from "./routes/contactRoutes";
import organizationRoutes from "./routes/organizationRoutes";
import nodemailerRoutes from "./routes/nodemailerRoutes";

// Initialize dotenv and Express
dotenv.config();
const app = express();
app.set('trust proxy', 1);

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(mongoSanitize());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
}));
app.use(hpp());
app.use(helmet());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI as string, { dbName: "RoasterDB" })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err: any) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/local", localAuthRoutes);
app.use("/api/professional", professionalAuthRoutes);
app.use("/api/twilio", twilioRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/organization", organizationRoutes);
app.use("/api/nodemailer", nodemailerRoutes);
app.use("/api/roaster", roasterRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 API is running....");
});

// Start Server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
