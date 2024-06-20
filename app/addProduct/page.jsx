export default function AddProduct() {
  return (
    <>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Product Name"
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="/images/1.jpg"
          defaultValue="/images/1.jpg"
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <input
          type="number"
          placeholder="1"
          defaultValue="1"
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Product Category"
          className="input input-bordered input-accent w-full max-w-xs"
        />

        <button type="Submit" className="btn btn-primary w-full max-w-xs">
          {" "}
          Add Product{" "}
        </button>
      </form>
    </>
  );
}
