import express from "express";
import mongoose from "mongoose";
import path from 'node:path'

import { router } from "./app/router";
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const PORT = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..','..', 'uploads')))
    app.use(express.json())
    app.use(router)


    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error)
    console.log("error: connection refused");
  });
