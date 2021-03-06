import React, {Component} from 'react'
import PropTypes from 'prop-types';

class PropsValidation extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.age}</h1>
            </div>
        )
    }
}

PropsValidation.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string
}

PropsValidation.defaultProps = {
    age: 35,
    name: "danilo"
}
export default PropsValidation