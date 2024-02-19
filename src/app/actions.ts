"use server";

import { CreateProductRequest, Product } from "@/lib/types";
import { sleep } from "./helpers";
import { revalidatePath } from "next/cache";

export const createProducts = async (input: CreateProductRequest) => {
  try {
    await sleep(3000);
    await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({
        name: input.name,
        price: input.price,
        image: "https://dummyimage.com/100",
      }),
    });
    return true;
  } catch (error) {
    return false;
  } finally {
    revalidatePath("/");
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/products");

    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};
