import React from "react";
import {Users} from "../../lib/Users";


class AddUser extends React.Component {
    addUser() {
        let nameOfPlayer = document.getElementById('name-of-user').value;
        if (nameOfPlayer) {
            Users.insert({name: nameOfPlayer});
        }

    }
    render() {
        return (
            <React.Fragment>
                <input id={'name-of-user'}/>
                <button className={"column-button"} onClick={this.addUser.bind(this)}>Add User</button>
            </React.Fragment>

        );
    }
}

export default AddUser;