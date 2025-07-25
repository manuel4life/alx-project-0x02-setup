import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Posts;
