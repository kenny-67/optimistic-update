import { Product } from "@/lib/types";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.id}
      className="border rounded-3xl hover:scale-105 w-fit h-fit p-4 flex flex-col items-center gap-2"
    >
      <Image src={product.image} alt="product-image" height={100} width={100} />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button className="border rounded-xl w-fit p-2">Add to cart</button>
    </div>
  );
};

export default ProductCard;
