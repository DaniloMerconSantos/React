import React, { Component } from 'react'

class StateInput extends  Component{

    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }

        setTimeout(()=> {
            this.setState({
                name : 'Nícolas'
            })
        }, 1000)
    }


    render() {
        console.log(this.state.name)
        return(
            <div>
                <input type="text" name="name" value={this.state.name} />
            </div>
        )
    }
}

export default StateInput

