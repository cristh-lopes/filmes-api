import { Router } from "express";
import {
  getTvShows,
  searchTvShows,
  getRandomTvShow,
} from "../services/tvShowsService";

const router = Router();

router.get("/", async (req, res) => {
  const { type = "popular", query, page = 1 } = req.query;

  try {
    const data = query
      ? await searchTvShows(query as string, Number(page))
      : await getTvShows(type as string, Number(page));

    res.status(200).json(data);
  } catch (error: unknown) {
    console.error("Erro na API de séries:", error);
    res.status(500).json({
      error: "Erro ao buscar dados da API",
      message: error,
    });
  }
});

router.get("/aleatorio", async (req, res) => {
  try {
    const data = await getRandomTvShow();
    res.status(200).json(data);
  } catch (error: unknown) {
    console.error("Erro ao buscar série aleatória:", error);
    res.status(500).json({
      error: "Erro ao buscar série aleatória",
      message: error,
    });
  }
});

export default router;
