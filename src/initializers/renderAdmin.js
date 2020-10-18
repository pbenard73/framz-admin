import React from 'react'
import fs from 'fs'

import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom"

import generateAdmin from "./../front/adminGenerator"

export default function () {
    this.get(["/admin", "/admin/*"], (req, res) => {
        const Admin = generateAdmin(this)
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <Admin />
            </StaticRouter>
        )
        fs.readFile("node_modules/framz-admin/build/index", "utf8", (error, content) => {
            content = content.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            res.send(content)
        })
    })

    return this
}
