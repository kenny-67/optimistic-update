export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export type CreateProductRequest = {
  name: string;
  price: string;
};
