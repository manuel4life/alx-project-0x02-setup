import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user: any) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={{
                  street: user.address.street,
                  city: user.address.city,
                }}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Users;
