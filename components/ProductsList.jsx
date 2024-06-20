import Link from "next/link";

export default function ProductsList() {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold py-10">
            Next.JS 14 CRUD Create, Read, Update and Delete - MongoDB Daisyui
            TailwindCSS
          </h1>
        </div>

        <div className="text-right">
          <Link className="btn btn-primary" href={"/addProduct"}>
            Add Product
          </Link>
        </div>
      </div>
    </>
  );
}
