require("dotenv").config();

const PORT = process.env.PORT || 4000;

require("./Config/database").ToDoDataBase();
const express = require("express");
const app = express();
const cors = require("cors");
const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", todoRouters);
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`App is listening at: http://localhost:${PORT}`);
});
