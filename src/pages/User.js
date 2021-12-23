import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from '../redux/userSlice';

function User() {
  // @ts-ignore
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  }

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers());
    }
  }, []);

	return (
    <ul>
      {
        users?.map((user) => (
         <li key={user.id}>
           <span>{`${user.first_name} ${user.last_name}`}</span>
           <button onClick={() => handleDelete(user.id)}>delete</button>
          </li>
        ))
      }
    </ul>
  );
}

export default User;
