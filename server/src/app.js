import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

// Security and request middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "E-commerce API is running",
    });
});

// Register feature routes here
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/products", productRoutes);
// app.use("/api/v1/categories", categoryRoutes);
// app.use("/api/v1/orders", orderRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/admin", adminRoutes);

// Register error-handling middleware last

export default app;