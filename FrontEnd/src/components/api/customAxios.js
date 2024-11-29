import axios from "axios";

export const customAxios = axios.create({
  baseURL: "/api",
  headers: {
    // authorization: `Bearer ${localStorage.getItem("token")}`,
    authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyU2VxIjoiNyIsImlhdCI6MTY5NTM0NTEzMywiZXhwIjoxNjk2NTU0NzMzfQ.pRzm_3EPwwX0FttvlKuDGPi4YTbvHQbr7uYXYAkuq08`,
  },
});

export const authAxios = axios.create({
  baseURL: "/api",
});
