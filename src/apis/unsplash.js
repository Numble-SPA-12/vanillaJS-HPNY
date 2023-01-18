import { unsplashInstance } from "./instance";

export const getRandomImage = async () => {
  try {
    const { data } = await unsplashInstance.get("/photos/random");
    return data;
  } catch (err) {
    console.error(err);
  }
};
