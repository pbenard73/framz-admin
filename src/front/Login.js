import React from "react"

import framz from "./hocs/framz"

class Login extends React.Component {
    loginBindThis() {
        this.props.api.call("login")
    }

    render() {
        return (
            <div>
                Login
                <button onClick={this.login}>click here</button>
            </div>
        )
    }
}

export default framz()(Login)
