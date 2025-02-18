import { Router } from "express";
import {
  getMovies,
  searchMovies,
  getRandomMovie,
} from "../services/movieService";

const router = Router();

router.get("/", async (req, res) => {
  const { type = "popular", query, page = 1 } = req.query;

  try {
    const data = query
      ? await searchMovies(query as string, Number(page))
      : await getMovies(type as string, Number(page));

    res.status(200).json(data);
  } catch (error: unknown) {
    console.error("Erro na API de filmes:", error);
    res.status(500).json({
      error: "Erro ao buscar dados da API",
      message: error,
    });
  }
});

router.get("/aleatorio", async (req, res) => {
  try {
    const data = await getRandomMovie();
    res.status(200).json(data);
  } catch (error: unknown) {
    console.error("Erro ao buscar filme aleatório:", error);
    res.status(500).json({
      error: "Erro ao buscar filme aleatório",
      message: error,
    });
  }
});

export default router;
