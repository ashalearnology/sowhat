import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./utils/errorHandler.ts";
import connectToDB from "./config/db.ts";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectToDB();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
import userRoutes from "./routes/user.routes.ts";
import userAddressRoutes from "./routes/userAddress.routes.ts";

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/address", userAddressRoutes);

// Error Handler
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to sowhat API"
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`⚙️  Server is running on port http://localhost:${PORT}`);
});
