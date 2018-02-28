import React, { Component } from 'react'
import styled from 'styled-components'



class LessonEditForm extends Component {

    componentWillMount() {
      

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          
        })
    }

    state = {
        lessons:
        }
    }

    handleChange = (event) => {
        const updatedlesson = {
            ...this.state.lessonBeingEdited
        }

        const inputField = event.target.name
        const inputValue = event.target.value
        updatedlesson[inputField] = inputValue
        this.setState({ lessonBeingEdited: updatedlesson })
    }

 

    render() {
        return (
            <Container>
                <input
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.lessonBeingEdited.title}
                    placeholder="Title" />
                <textarea
                    type="text"
                    name="content"
                    onChange={this.handleChange}
                    value={this.state.lessonBeingEdited.content}
                    placeholder="Content" />
                <button onClick={this.handleEditlesson}>
                    Edit
        </button>
            </Container>
        )
    }
}

export default EditlessonForm