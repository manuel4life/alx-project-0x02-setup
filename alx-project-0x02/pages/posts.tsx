import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p className="mt-4">Browse our latest posts.</p>
      </main>
    </div>
  );
};

export default Posts;
