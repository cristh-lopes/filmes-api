import axios, { AxiosError } from "axios";
import dotenv from "dotenv";

dotenv.config();

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "pt-BR",
  },
});

export const fetchFromTMDB = async (url: string, params: object = {}) => {
  try {
    const response = await tmdbApi.get(url, { params });
    return response.data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof AxiosError
        ? `Erro ao buscar dados do TMDB: ${error.message}`
        : error instanceof Error
        ? `Erro ao buscar dados: ${error.message}`
        : "Erro desconhecido ao buscar dados."
    );
  }
};
