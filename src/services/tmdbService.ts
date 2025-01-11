import axios from "axios";
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

export const getMovies = async (type: string, page: number = 1) => {
  const response = await tmdbApi.get(`/movie/${type}`, { params: { page } });
  return response.data;
};

export const searchMovies = async (query: string, page: number = 1) => {
  const response = await tmdbApi.get("/search/movie", {
    params: { query, page },
  });
  return response.data;
};
