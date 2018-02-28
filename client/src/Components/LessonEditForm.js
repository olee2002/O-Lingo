import React, { Component } from 'react'
import styled from 'styled-components'



class LessonEditForm extends Component {

    componentWillMount() {
      

    }

    componentWillReceiveProps(nextProps) {
    
    }

    state = {
        lesson:{}
    }

    handleChange = (event) => {
    
        this.setState({ lessonBeingEdited: updatedlesson })
    }

    render() {
        return (
            <Container>
                <input
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.lesson.title} />
                     <input
                    type="text"
                    name="audio"
                    onChange={this.handleChange}
                    value={this.state.lesson.audio} />
                       <input
                    type="text"
                    name="question"
                    onChange={this.handleChange}
                    value={this.state.lesson.question} />
               <input
                    type="text"
                    name="answer"
                    onChange={this.handleChange}
                    value={this.state.lesson.answer} />
            <button>Edit</button> <button>Delete</button>
            </Container>
        )
    }
}

export default EditlessonForm