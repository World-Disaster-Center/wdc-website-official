import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import http from "http"
import { Server } from "socket.io";

const app = express();
require("dotenv").config();

//adding socket.io configuration
const server = http.createServer(app);
export const io = new Server(server);

//import routes
import errorHandler from "./middleware/error";
import localAuthRoutes from "./routes/localAuthRoutes"
import professionalAuthRoutes from "./routes/professionalAuthRoutes"

//database connection
mongoose
  .connect(process.env.DATABASE || "mongodb", {dbName: "wdc"})
  .then(() => console.log("DB connected"))
  .catch((err:any) => console.log(err));

//MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());

//CORS
const corsConfig = {
  origin: [
    "https://world-disaster-center-git-master-josephbakulikiras-projects.vercel.app",
    "https://world-disaster-center-fqyc4nqnr-josephbakulikiras-projects.vercel.app",
    "https://wdc-website-official-iuhmniq30-wdc1.vercel.app",
    "http://localhost:5173", 
    "https://localhost:5173",
    "http://localhost:3000",
    "https://www.worlddisastercenter.org",
    "https://worlddisastercenter.org",
    "http://www.worlddisastercenter.org",
    "http://localhost:5173/profile/complete",
    process.env.FRONTEND || "http://localhost:5173", 
    process.env.WDCAPPFRONTEND || "http://localhost:5173",
    "https://wdc-app.vercel.app",
    "https://www.worlddisastercenter.org", 
    "https://world-disaster-center-backend.vercel.app"],
  credentials: true,
};

app.use(cors(corsConfig));

// prevent SQL injection
app.use(mongoSanitize());

//limit queries per 15mn
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false, 
});
app.use(limiter);
//HTTP Param Pollution
app.use(hpp());

//ROUTES
app.use("/api/local", localAuthRoutes);
app.use("/api/professional", professionalAuthRoutes);

__dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("API is running....");
});

//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 9000;


// io.on("connection", (socket) => {
//   //console.log('a user connected', socket.id);
//   socket.on("comment", (msg) => {
//     // console.log('new comment received', msg);
//     io.emit("new-comment", msg);
//   });
// });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
