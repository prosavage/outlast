import React from "react";
import TitleBar from "./Titlebar";
import Footer from "./Footer"
import ColumnView from "./ColumnView";

class App extends React.Component {
    render() {
        return (
            <div className={"appBody"}>
                <TitleBar title={"Outlast"}/>
                <ColumnView users={this.props.users}/>
                {/*<Footer/>*/}
            </div>
        )
    }
}

export default App;
