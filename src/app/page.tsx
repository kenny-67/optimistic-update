import Link from "next/link";

import Admin from "./components/admin";
import { getProducts } from "./actions";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-black">
      <header className="border h-14 items-center flex mb-6 p-4 justify-between">
        <Link href="/" className=" text-xl">
          Bettys Place
        </Link>
        <input
          type="search"
          name="search"
          id=""
          className="border w-[60%] max-w-[700px] rounded-xl py-1 px-6 text-black"
          placeholder="Search for products"
        />
        <div></div>
      </header>

      <Admin products={products} />
    </main>
  );
}
