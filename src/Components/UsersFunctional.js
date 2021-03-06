import React, { useState } from "react";
import "../Styles/Users.css";
import UsersList from "./UsersList";

const UsersFunctional = (props) => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  const deleteUser = (userID) => {
    setUsers(
      users.filter((user) => {
        return user.id !== userID;
      })
    );
  };

  return (
    <div className="users-main">
      <h1>User's list</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (input.length > 1) {
            let newUser = {
              id: Date.now(),
              name: input,
            };
            setUsers(users.concat(newUser));
            setInput("");
          } else {
            alert("User name can not be empty");
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit">Add user</button>
      </form>
      <UsersList usersList={users} deleteUserMethod={deleteUser} />
    </div>
  );
};

export default UsersFunctional;
