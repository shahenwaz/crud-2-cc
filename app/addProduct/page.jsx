"use client";

import { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Name and image are required !!!");
      return;
    }

    try {
      console.log("Success");
    } catch {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-6">
        <div className="text-center mb-6">
          <h1 className="font-bold text-2xl ">Add New Product</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Product Name"
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="/images/1.jpg"
            defaultValue="/images/1.jpg"
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="1"
            defaultValue="1"
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            placeholder="Product Category"
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <button type="Submit" className="btn btn-primary w-full max-w-xs">
            {" "}
            Add Product{" "}
          </button>
        </form>
      </div>
    </>
  );
}
