export type Categoria = {
  id: number;
  name: string;
  image: string;
}

export type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Categoria;
  images: string[];
};

