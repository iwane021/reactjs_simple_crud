import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "React JS Simple CRUD",
            subTitle: ""
        }
    }

    render() {
        return (
            <div id="header">
                <h1>{this.state.title}</h1>
                <span>{this.state.subTitle}</span>
            </div>
        )
    }
}

export default Header
