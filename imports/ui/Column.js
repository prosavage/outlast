import React from "react";


class Column extends React.Component {
    render() {
        return (
            <div style={{width: this.props.width + "vw"}} className={"column"}>
                <div className={"wrapper"}>
                    <p>
                        {this.props.name}
                    </p>
                </div>
            </div>
        )
    }
}

export default Column;