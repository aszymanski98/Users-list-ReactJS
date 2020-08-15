import React, { Component } from 'react';
import './Users.css';
import UsersList from './UsersList';

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    deleteUser = userID => {
        this.setState( state => {
            return ({
                users: state.users.filter( user => { return user.id !== userID })
            });
        })
    }

    addUser = event => {
        event.preventDefault();

        let newUser = {
            id: Date.now(),
            name: this._inputName.value,
        }

        this.setState( state => {
            return ({
                users: state.users.concat(newUser)
            });
        })

        this._inputName.value = '';
    }

    render() {
        return (
            <div className='users-main'>
                <h1>User's list</h1>
                <form onSubmit={this.addUser}>
                    <input ref={ data => this._inputName = data } type="text" placeholder='Enter name' />
                    <button type='submit'>Add user</button>
                </form>
                <UsersList usersList={this.state.users} deleteUserMethod={this.deleteUser} />
            </div>

        );
    }

}

export default Users;