import { fetchFromTMDB } from "./tmdbService";
import { AxiosError } from "axios";

export const getMovies = async (type: string, page: number = 1) => {
  try {
    const data = await fetchFromTMDB(`/movie/${type}`, { page });
    return data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof AxiosError
        ? `Erro ao buscar filmes do TMDB: ${error.message}`
        : error instanceof Error
        ? `Erro ao buscar filmes: ${error.message}`
        : "Erro desconhecido ao buscar filmes."
    );
  }
};

export const searchMovies = async (query: string, page: number = 1) => {
  try {
    const data = await fetchFromTMDB("/search/movie", { query, page });
    return data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof AxiosError
        ? `Erro ao buscar filmes do TMDB: ${error.message}`
        : error instanceof Error
        ? `Erro ao buscar filmes: ${error.message}`
        : "Erro desconhecido ao buscar filmes."
    );
  }
};

export const getRandomMovie = async () => {
  try {
    const data = await fetchFromTMDB("/movie/popular", { page: 1 });

    const movies = data.results;
    const randomIndex = Math.floor(Math.random() * movies.length);

    return movies[randomIndex];
  } catch (error: unknown) {
    throw new Error(
      error instanceof AxiosError
        ? `Erro ao buscar filme aleatório: ${error.message}`
        : error instanceof Error
        ? `Erro ao buscar filme aleatório: ${error.message}`
        : "Erro desconhecido ao buscar filme aleatório."
    );
  }
};
