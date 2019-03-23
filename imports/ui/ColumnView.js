import React from "react";
import Column from "./Column";

class ColumnView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amt: this.props.users.length }
    }
    renderColumns() {
        console.log(this.state.amt);
        let columns = [];
        let amount = this.props.users.length;
        for (let i = 0; i < amount; i++) {
            columns[i] = <Column width={100 / amount} name={this.props.users[i].name}/>
        }
        return columns;
    }

    render() {
        return (
            <div className={"column-view"}>
                {this.renderColumns()}
            </div>

        )
    }
}

export default ColumnView;