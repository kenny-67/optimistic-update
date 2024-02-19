import { Product } from "@/lib/types";

import ProductCard from "./productCard";

type ProductsSectionProps = {
  products: Product[];
};

const Products = ({ products }: ProductsSectionProps) => {
  return (
    <div className="w-full gap-4 justify-center flex flex-wrap">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default Products;
