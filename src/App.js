import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge, imgUrl) => {
    //we pass a function to get a previous state snapshot
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: userName,
          age: userAge,
          image: imgUrl,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
