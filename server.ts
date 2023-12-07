import express from "express";
// import cors from "cors";
import dotEnv from "dotenv";
dotEnv.config();

const app = express();
const port = process.env.SERVER_PORT || 8081;

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);
// define cors allow domains
// const corsOptions = {
//   origin: "https://chihkaiyin.blog",
// };
// app.use(cors(corsOptions));

// first router
app.get("/", (_, res) => {
  res.json({
    message: "ok",
  });
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
