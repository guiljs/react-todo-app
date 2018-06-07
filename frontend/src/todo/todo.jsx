import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3004/api/todos' //Meu backend está na porta 3004 e não na 3003 como a do professor

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }
    refresh() {
        axios.get(`${URL}?sort=createdAt`)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())

    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }
    handleMarkAsDone(todo) {
        //localhost:3004/api/todos/:id
        axios.put(`${URL}/${todo._id}`, {
            done: true
        })
            .then(resp => this.refresh())
        console.log('Marcado as Done')
    }
    handleMarkAsPending(todo) {
        // axios.put(`${URL}/${todo._id}`, {
        //     done: false
        // })
        axios.put(`${URL}/${todo._id}`, {...todo,
            done: false
        })
            .then(resp => this.refresh())
        console.log('Marcado as Pending')
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}