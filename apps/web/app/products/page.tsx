"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "../src/components/Products";

const queryClient = new QueryClient();

export default function ProductsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Products
        </h1>
        <Products />
      </div>
    </QueryClientProvider>
  );
}
