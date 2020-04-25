import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            copy: "Copyright © 2019-2020",
            name: "Iwan Prasetiyo"
        }
    }

    render() {
        return (
            <div id="footer">
                <p><small>{this.state.copy} <a href="https://www.linkedin.com/in/iwanprasetiyo/">{this.state.name}</a>. All rights reserved. </small></p>
            </div>
        )
    }
}

export default Footer
