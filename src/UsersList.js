import React from 'react';
import './UsersList.css';

const UsersList = props => {

    let usersList = props.usersList;
    let usersListElements = usersList.map( user =>
        <li key={user.id}>{user.name} <span onClick={() => props.deleteUserMethod(user.id)}>X</span></li>);

    return (
        <ul className='list'>
            {usersListElements}
        </ul>
    );

}

export default UsersList;