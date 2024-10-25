// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const PORT = 8081;
import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv"

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.sputnik8.com/v1/cities?api_key=873fa71c061b0c36d9ad7e47ec3635d9&username=frontend@sputnik8.com",
  };

  axios
  .request(options)
  .then((response) => {
    res.json(response.data);
  })
  .catch((error) => {
    res.json(error);
  });
});

app.listen(PORT, () => {
  console.log(`Server for cities is running on port ${PORT}`);
});
