import axios from "axios";

const BASE_URL = process.env.BASE_API_URL;
const UNSPLASH_URL = process.env.UNSPLASH_API_URL;

export const baseInstance = axios.create({
  baseURL: BASE_URL,
});

export const unsplashInstance = axios.create({
  baseURL: UNSPLASH_URL,
  params: {
    client_id: process.env.UNSPLASH_ACCESS_KEY,
  },
});
