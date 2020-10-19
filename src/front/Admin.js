import React from "react"

import Login from "./Login"

class Admin extends React.Component {
    constructor(props) {
        super(props)
        console.log('CSTR', props)
    }
    render() {
        return (
            <div>
                <h1>Admin Area</h1>
                <Login />

                <ul>
                    {this.props.models.map(model => (
                        <li key={model}>{model}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Admin
