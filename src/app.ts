import express from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies";
import tvShowsRouter from "./routes/tvShows";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/filmes", moviesRouter);
app.use("/api/series", tvShowsRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
