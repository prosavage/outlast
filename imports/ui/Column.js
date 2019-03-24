import React from "react";
import AddTask from "./AddTask";
import {Users} from "../../lib/Users";



//<div style={{width: this.props.width + "vw"}} className={"column"}>
class Column extends React.Component {
    removeTask(i) {
        let user = Users.findOne({_id: this.props.id});
        let tasks = user.tasks;
        tasks.splice(i,1);
        user.tasks = tasks;
        Users.update({_id: this.props.id}, user);
    }

    changeTaskStatus(i) {
        let user = Users.findOne({_id: this.props.id});
        let tasks = user.tasks;
        tasks[i].status = !tasks[i].status;
        user.tasks = tasks;
        Users.update({_id: this.props.id}, user);
    }

    renderTasks() {
        let tasks = [];
        if (this.props.tasks.length === undefined || this.props.tasks.length === 0) {
            return <ul>No Tasks</ul>
        }
        for (let i = 0; i < this.props.tasks.length; i++) {
            tasks[i] = <ul>
            <label className={'container'}>

                <input onClick={this.changeTaskStatus.bind(this, i)} className={"small-padding small-margin checkmark"} id={'checkbox-' + this.props.id} type={'checkbox'}/>
                <span className={'checkmark'}/>
                {this.props.tasks[i].task}
                <button onClick={this.removeTask.bind(this, i)} className={"small-padding small-margin x-button"}>x</button>

            </label>
           </ul>;
        }
        return (
            tasks
        )
    }

    calculatePoints() {
        let score = 0;
        for (let i = 0; i < this.props.tasks.length; i++) {
            if (this.props.tasks[i].status) {
                score += 10;
            }
        }
        return score;
    }

    generateRGB() {
        return 'rgba(' + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", 0.2)";
    }

    deleteColumn() {
        Users.remove({_id: this.props.id});
    }

    render() {
        return (
                <div style={{backgroundColor: 'rgba(112,147,212,0.2)'}} className={"column"}>
                    <div className={"card-wrapper"}>
                        <div className={"wrapper"}>
                            <div className={"card"}>
                                <div>
                                    <AddTask id={this.props.id}/>
                                </div>
                                <div>
                                    <h2>{this.props.name}</h2>
                                    <br/>
                                    <h4>Tasks</h4>
                                    <br/>
                                </div>
                                {this.renderTasks()}
                                <br/>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <h1>{this.calculatePoints()} Points</h1>
                                    <button onClick={this.deleteColumn.bind(this)} className={'x-button'}>X</button>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}

export default Column;
