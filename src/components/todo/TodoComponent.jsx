import React, { Component } from 'react'

class TodoComponent extends Component {
    constructor(props) {
        super()

        this.state = {
            id: '1',
            description: 'Learn',
            targetDate: new Date()
        }
    }
    render() {
        return (
            <div>Todo Component for id - {this.props.match.params.id}</div>
        )
    }
}

export default TodoComponent