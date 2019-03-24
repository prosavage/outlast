import React from "react";
import {Users} from "../../lib/Users";
class AddTask extends React.Component {

    addTask(e) {
        e.preventDefault();
        let taskName = document.getElementById('name-of-task-' + this.props.id).value;
        document.getElementById('name-of-task-' + this.props.id).value = '';
        if (taskName) {
            let user = Users.findOne({_id: this.props.id});
            let tasks = user.tasks;
            if (user.tasks.length === undefined) {
                tasks = [];
            }
            tasks[tasks.length] = {task: taskName, status: false};
            user.tasks = tasks;
            Users.update({_id: this.props.id}, user);
        }
    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <input id={'name-of-task-' + this.props.id} placeholder={'   Add a Task...'} className={"taskInput input-shadow"}/>
                    <button className={'hidden small-margin'} onClick={this.addTask.bind(this)}>New Task</button>
                    <br/>
                </form>

                <br/>
            </React.Fragment>


        )
    }
}

export default AddTask;
