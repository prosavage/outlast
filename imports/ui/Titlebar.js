import React from "react";
import AddUser from "./AddUser";

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div className="column-wrapper">
                    <h1>{this.props.title}</h1>
                    <AddUser/>
                </div>

            </div>
        );
    }
}