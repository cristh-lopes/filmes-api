import { Router } from "express";
import { getMovies, searchMovies } from "../services/tmdbService";

const router = Router();

router.get("/", async (req, res) => {
  const { type = "popular", query, page = 1 } = req.query;

  try {
    const data = query
      ? await searchMovies(query as string, Number(page))
      : await getMovies(type as string, Number(page));

    res.status(200).json(data);
  } catch (error) {
    console.error("Erro na API de filmes:", error);
    res.status(500).json({ error: "Erro ao buscar dados da API" });
  }
});

export default router;
