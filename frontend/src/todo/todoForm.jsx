import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        }
        else if (e.key === 'Escape') {
            props.handleClear()
        }

    }

    render() {
        const { add, search, description } = this.props //ES2015 - Extrator
        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input type="text" id="description" className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)} toolTip='Adicionar (Enter)'></IconButton>
                <IconButton style='info' icon='search' toolTip='Pesquisar (Shift-Enter)'
                    onClick={() => search()}></IconButton>
                <IconButton style='default' icon='close' toolTip='Limpar pesquisa (Escape)'
                    onClick={this.props.handleClear} />
                </Grid>
            </div >
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)