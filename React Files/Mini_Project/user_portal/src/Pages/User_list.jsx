import { useState, useEffect } from "react";

function User_list() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>This is User_List page</h1>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default User_list;