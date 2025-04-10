
require('dotenv').config();

const express = require('express');
const connectDB = require("./config/db");
const cors = require("cors")
const todoRoutes = require("./routes/TodoRoute");
const app = express();
app.use(express.json());
app.use(cors())
connectDB();

app.use("/api",todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
