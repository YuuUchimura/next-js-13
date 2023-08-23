import Link from "next/link";

export type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = async () => {
  const response = await fetch("http://localhost:3000/api", {
    method: "GET",
    // cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch data");
  const users: User[] = await response.json();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
