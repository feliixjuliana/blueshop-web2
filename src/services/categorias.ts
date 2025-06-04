import axios from "axios";
import type { Categoria } from "../types/Categoria";


export async function getCategorias(): Promise<Categoria[]> {
  const response = await axios.get<Categoria[]>("https://api.escuelajs.co/api/v1/categories");
  return response.data;
}