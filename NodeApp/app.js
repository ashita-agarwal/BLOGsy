const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const blogRoutes = require("./routes/blog");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/blogs", blogRoutes);

app.listen(3000, () => console.log("server up and runing on port 3000!"));