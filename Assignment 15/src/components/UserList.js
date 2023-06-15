import React from 'react';

const UserList = ({ users }) => {
  console.log('users:', users); // Add this line to check the value of users

  if (!Array.isArray(users)) {
    return <div>No users found</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
