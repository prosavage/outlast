import React from "react";
import {Users} from "../../lib/Users";

class AddUser extends React.Component {
    addUser() {
        event.preventDefault();
        let nameOfPlayer = document.getElementById('name-of-user').value;
        document.getElementById('name-of-user').value = '';
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

    addGroupTask() {
        let taskName = document.getElementById('name-of-user').value;
        document.getElementById('name-of-user').value = '';
        if (taskName) {
            let users = Users.find().fetch();
            users.forEach((user) => {
                let tasks = user.tasks;
                if (user.tasks.length === undefined) {
                    tasks = [];
                }
                tasks[tasks.length] = {task: taskName, status: false};
                user.tasks = tasks;
                Users.update({_id: user._id}, user);
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <input className={"column-button input-shadow"} placeholder={"  Add a User or Group Task"} id={'name-of-user'}/>
                    <button className={"column-button input-button"} onClick={this.addUser.bind(this)}>Add User</button>
                </form>
                <button className={'column-button input-button'} onClick={this.getLeader}>Leaderboard</button>
                <button className={'column-button input-button'} onClick={this.addGroupTask}>Add Group Task</button>
            </React.Fragment>

        );
    }
}

export default AddUser;
