
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     // <div>
      
//     // </div>
//     <div className={styles.page}>
//         Hello turborepo
//     </div>
//   );
// }


"use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Posts from "./src/components/Posts";
// import Products from "./src/components/Products";
import Toggle from "./src/components/Toggle";
import Counter from "./src/components/Counter";

// const queryClient = new QueryClient();


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Zustand Counter</h1>
      <Counter />
      </div>

      <div className="flex justify-center items-center h-screen">
      <Toggle />
    </div>


    {/* <QueryClientProvider client={queryClient}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Posts using React Query</h1>
        <Posts />
      </div>
    </QueryClientProvider> */}

   {/* <QueryClientProvider client={queryClient}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Products Using React Query
        </h1>
        <Products />
      </div>
    </QueryClientProvider> */}

    </main>

  );
}
