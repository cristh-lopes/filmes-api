import { fetchFromTMDB } from "./tmdbService";
import { AxiosError } from "axios";

export const getTvShows = async (type: string, page: number = 1) => {
  try {
    const data = await fetchFromTMDB(`/tv/${type}`, { page });
    return data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof AxiosError
        ? `Erro ao buscar séries do TMDB: ${error.message}`
        : error instanceof Error
        ? `Erro ao buscar séries: ${error.message}`
        : "Erro desconhecido ao buscar séries."
    );
  }
};

export const searchTvShows = async (query: string, page: number = 1) => {
  try {
    const data = await fetchFromTMDB("/search/tv", { query, page });
    return data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof AxiosError
        ? `Erro ao buscar séries do TMDB: ${error.message}`
        : error instanceof Error
        ? `Erro ao buscar séries: ${error.message}`
        : "Erro desconhecido ao buscar séries."
    );
  }
};

export const getRandomTvShow = async () => {
  try {
    const data = await fetchFromTMDB("/tv/popular", { page: 1 });

    const tvShows = data.results;
    const randomIndex = Math.floor(Math.random() * tvShows.length);

    return tvShows[randomIndex];
  } catch (error: unknown) {
    throw new Error(
      error instanceof AxiosError
        ? `Erro ao buscar série aleatória: ${error.message}`
        : error instanceof Error
        ? `Erro ao buscar série aleatória: ${error.message}`
        : "Erro desconhecido ao buscar série aleatória."
    );
  }
};
