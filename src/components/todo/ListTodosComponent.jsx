import React, { Component } from 'react'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, name: 'Yosef Simbolon', done: false, targetDate: new Date() },
                { id: 2, name: 'Jinawi Kuswoyo M.TI.', done: false, targetDate: new Date() },
                { id: 3, name: 'Lurhur Putra', done: false, targetDate: new Date() },
                { id: 4, name: 'Shania Hariyah S.Kom', done: false, targetDate: new Date() }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Name</th>
                                <th>Is Complete</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id.toString()}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.name}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent