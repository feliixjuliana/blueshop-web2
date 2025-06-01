import axios from "axios";
import type { Produto } from "../types/Produto";


export async function getProdutos(): Promise<Produto[]> {
  const response = await axios.get<Produto[]>("https://api.escuelajs.co/api/v1/products");
  return response.data;
}