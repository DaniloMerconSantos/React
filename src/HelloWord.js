import React, {Component} from "react";
import StateInput from "./StateInput";

class HelloWord extends Component{

    constructor (props) {
        super(props)

        this.state = {
            name: 'Danilo',
            txt: this.props.txt
        }
    }

    render() {
        const style = {
            color: '#fff',
            backgroundColor: '#000'
        }
        return (
            <div className="my-class-from-react">
                <StateInput/>
                <h1 style={style}> Mais um hello word.</h1>
                <h3>{this.state.txt}</h3>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWord
