// This page is a server component, so we can use async/await at the top level.
export default async function DataPage() {
    // Fetch data from a fake API
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id} className="mb-4 border p-2 rounded">
              <h2 className="font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  //  http://localhost:3000/data