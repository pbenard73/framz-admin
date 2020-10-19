import React from "react"

import Login from "./Login"

class Admin extends React.Component {
    constructor(props) {
        super(props)
        console.log('CSTR', props)
    }
    render() {
	    console.log('REDER', this.props.models)
        return (
            <div>
                <h1>Admin Area</h1>
                <Login />

            </div>
        )
    }
}

export default Admin
