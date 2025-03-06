"use client";

import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const Posts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts.</p>;

  return (
    <ul>
      {data.map((post: any) => (
        <li key={post.id} className="mb-4 p-2 border rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
