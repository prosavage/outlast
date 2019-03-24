import React from "react";
import AddTask from "./AddTask";
import {Users} from "../../lib/Users";


class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'rgba(112, 147, 212, 0.2)' }
    }


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

                <input onClick={this.changeTaskStatus.bind(this, i)} className={"small-padding small-margin checkmark"} checked={this.props.tasks[i].status} id={'checkbox-' + this.props.id} type={'checkbox'}/>
                <span className={'checkmark'}/>
                <div>
                {this.props.tasks[i].task}
                </div>
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
        console.log('Colors...');
        if (this.calculatePoints() / (this.props.tasks.length * 10) === 1) {
            console.log("green");
            return 'rgba(112,255,100,0.2)';
        } else if (this.calculatePoints() === 0) {
            console.log('red');
            return 'rgba(255,100,124,0.2)'
        } else {
            console.log('blue');
            return ;
        }
    };

    deleteColumn() {
        Users.remove({_id: this.props.id});
    }

    render() {
        return (
                <div style={{backgroundColor: this.generateRGB()}} className={"column"}>
                    <div className={"card-wrapper"}>
                        <div className={"wrapper"}>
                            <div className={"card"}>
                                <div>
                                    <AddTask id={this.props.id}/>
                                </div>
                                <div>
                                    <div style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',width: '100%'}}>
                                        <div style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',width: '100%'}}>
                                        <h2>{this.props.name}</h2>
                                        <button onClick={this.deleteColumn.bind(this)} className={'x-button'}>X</button>
                                        </div>
                                        <br/>
                                        <div style={{width: '100%'}}>
                                            <h4>Tasks</h4>
                                        </div>

                                        <br/>
                                        <div>{this.renderTasks()}</div>

                                    </div>

                                </div>

                                <br/>
                                <h1 style={{position: "absolute", bottom: "15px"}}>{this.calculatePoints() }/{ (this.props.tasks.length * 10)}  Points</h1>
                            </div>

                        </div>
                    </div>
                </div>

        )
    }
}

export default Column;
