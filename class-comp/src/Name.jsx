import React from 'react'
import Prototype from "prop-types"

class Name extends React.Component{
constructor(props){
    super(props)
}

    render(){
        return <p>{this.props.name}</p>
    }
}

Name.propTypes = {
    name:Prototype.string.isRequired,
}


export default Name
