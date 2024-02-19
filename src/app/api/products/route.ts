import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const product = await prisma.products.findMany();

  return new Response(JSON.stringify(product), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}

export async function POST(request: NextRequest) {
  const { name, price, image } = await request.json();

  const product = await prisma.products.findFirst({
    where: {
      name,
    },
  });
  if (product) {
    return new Response("Product Exist", {
      status: 409,
    });
  }
  await prisma.products.create({
    data: { name, price, image },
  });

  return new Response("Ok");
}
