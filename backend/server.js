const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://customer-support-ticketing-crm-syst-weld.vercel.app"
    ],
    credentials: true
  })
);
app.use(express.json());

app.use("/api/tickets", require("./routes/ticketRoutes"));

app.get("/", (req, res) => {
  res.send("Support CRM API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});