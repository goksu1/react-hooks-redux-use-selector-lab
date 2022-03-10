import React from "react";
import {useSelector} from 'react-redux'

function Users() {
  const users = useSelector((state) => state.users);
  const usersCount = useSelector((state) => state.users.length);
  return (
    <div>
      <ul>
        Users!
        {users.map((user, index) => (
          <li key={index}>
            {user.username} / {user.hometown}
          </li>
        ))}
        Total Users: {usersCount} In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
