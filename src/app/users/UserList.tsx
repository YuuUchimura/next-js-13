type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Failed to fetch data");
  const users: User[] = await response.json();
  console.log(users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
