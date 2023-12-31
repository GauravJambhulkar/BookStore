import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for CORS policy
//Allow all origins
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack First project");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");

    app.listen(PORT, () => {
      console.log(`App is listening to the port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
