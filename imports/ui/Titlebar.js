import React from "react";
import AddUser from "./AddUser";
import AddTask from "./AddTask";

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div className="column-wrapper">
                    <img
                        className={"image"}
                        src={"https://cdn.discordapp.com/attachments/559019897905217551/559146254177796096/BigOutlast.png"}></img>
                    <AddUser/>
                </div>

            </div>
        );
    }
}