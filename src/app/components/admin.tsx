"use client";
import { useOptimistic, useRef } from "react";
import ProductForm from "./productForm";
import Products from "./productsSection";
import { Product } from "@/lib/types";
import { createProducts } from "../actions";

type AdminProp = {
  products: Product[];
};

const Admin = ({ products }: AdminProp) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentValue: Product[], optimisticValue: Product) => {
      return [...currentValue, optimisticValue];
    }
  );

  const handleCreateProducts = async (data: FormData) => {
    const name = data.get("name");
    const price = data.get("price");
    if (typeof name !== "string" || !name) return;
    if (typeof price !== "string" || !price) return;
    const product = {
      id: Math.random().toString(),
      name,
      price,
      image: "https://dummyimage.com/100",
    };
    setOptimisticProducts(product);
    formRef.current?.reset();
    await createProducts(product);
  };
  return (
    <>
      <div>
        <h2 className="text-center text-2xl mb-6">Create Products</h2>
        <ProductForm onCreateClick={handleCreateProducts} ref={formRef} />
      </div>

      <div className="mt-20">
        <h2 className="text-center text-2xl mb-6">Products</h2>
        <Products products={optimisticProducts} />
      </div>
    </>
  );
};

export default Admin;
