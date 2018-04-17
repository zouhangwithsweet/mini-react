import React, { Component } from 'react'
import './header.styl'
const logo = require('../../images/logo.png')

class Header extends Component {
    render() {
        return (
            <div className="component-header row">
                <img src={logo} alt="" width="40" className="-col-auto"/>
                <h1 className="caption">react music player</h1>
            </div>
        )
    }
}

export default Header
