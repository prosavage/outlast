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

    getLeader() {
        let allUsers = Users.find().fetch();
        if (allUsers.length === 0) {
            return;
        }
        let winner = allUsers[0];
        let high = 0;
        allUsers.forEach((user) => {
            let score = 0;
            user.tasks.forEach((task) => {
                task.status === true ? score+=10 : score+=0
            });
            if (high < score) {
                winner = user;
                high = score;
            }

        });
        alert("Winner " + winner.name);
    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <input className={"column-button input-shadow"} placeholder={"  Add a User..."} id={'name-of-user'}/>
                    <button className={"column-button input-button"} onClick={this.addUser.bind(this)}>Add User</button>
                </form>
                <button className={'column-button leaderboard-button'} onClick={this.getLeader}>Leaderboard</button>
            </React.Fragment>

        );
    }
}

export default AddUser;
