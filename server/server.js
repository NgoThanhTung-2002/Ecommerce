import express from "express";
import cors from "cors";
import initRoutes from "./src/routes";
require("dotenv").config();
require("./connection_database");
const app = express();
app.use(
  cors({
    //lấy url được phép truy cập api được chưa trong file .env
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
const PORT = process.env.PORT || 8888;
const listener = app.listen(PORT, () => {
  console.log("Server is listening on port " + listener.address().port);
});
