import React from "react";
import {Users} from "../../lib/Users";


class AddUser extends React.Component {
    addUser() {
        event.preventDefault();
        let nameOfPlayer = document.getElementById('name-of-user').value;
        if (nameOfPlayer) {
            Users.insert({name: nameOfPlayer, tasks: []});
        }

    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <input className={"column-button input-shadow"} placeholder={"New User's Name"} id={'name-of-user'}/>
                    <button className={"column-button input-button"} onClick={this.addUser.bind(this)}>Add User</button>
                </form>
            </React.Fragment>

        );
    }
}

export default AddUser;
