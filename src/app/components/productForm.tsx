"use client";
import React, { RefObject } from "react";

type ProductFormProps = {
  onCreateClick: (data: FormData) => void;
  ref: RefObject<HTMLFormElement>;
};

const ProductForm = ({ onCreateClick, ref }: ProductFormProps) => {
  return (
    <div className="flex items-center justify-center">
      <form
        className=" w-[50%] flex flex-col items-center"
        action={onCreateClick}
        ref={ref}
      >
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="">Product Name: </label>
          <input
            type="text"
            name="name"
            className=" rounded w-[400px] h-10 text-black px-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="">Price: </label>
          <input
            name="price"
            type="number"
            className=" rounded w-[400px] h-10 text-black px-4"
          />
        </div>

        <button className="border p-4 rounded-xl mt-6 w-[200px] bg-green-600">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
