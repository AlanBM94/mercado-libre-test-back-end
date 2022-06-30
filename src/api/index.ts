import axios from "axios";

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: "https://api.mercadolibre.com",
  });
};
