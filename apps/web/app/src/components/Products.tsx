"use client";

import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  // Fetch data from DummyJSON
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  // DummyJSON returns an object with a "products" array
  const data = await res.json();
  return data.products;
};

const Products = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error fetching products.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <ul>
        {data.map((product: any) => (
          <li key={product.id} className="mb-4 p-2 border rounded">
            <h3 className="font-bold">{product.title}</h3>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
