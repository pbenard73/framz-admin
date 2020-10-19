import React from "react"
import { Store } from "reactizy"
import Admin from "./Admin"
import { database } from "framz"

import loginReduxer from "./reduxers/login"

export default App => props => {
    const models = database.getModelsInfo(App)
    const api = {
        login: { path: "/api/login", method: "post" },
    }

    return (
        <Store apis={[api]} reduxers={[loginReduxer]}>
            <Admin {...props} models={models} />
        </Store>
    )
}
