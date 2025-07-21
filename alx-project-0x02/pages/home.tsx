import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <div className="flex flex-wrap">
        <Card
          title="Welcome to our site"
          content="Discover amazing features and services we offer."
        />

        <Card
          title="Leatest News"
          content="Check out our newest updates and announcements."
        />
        <Card
          title="Special Offers"
          content="imited time discount available for new members."
        />
      </div>
    </div>
  );
};

export default Home;
