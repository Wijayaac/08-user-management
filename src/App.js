import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { username, age, id: Math.random(4) }];
    });
  };

  return (
    <div className="app">
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
