import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value })
    
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    style={{ flex: '15', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    className="btn"
                    value="Save"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
