
// Importing React
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


class LessonAddForm extends Component {

    state = {
        lesson: {},
        languageId: ""
    }


    render() {
        //input data
        const handleChange = (e) => {
            const lesson = { ...this.state.lesson }
            lesson[e.target.name] = e.target.value
            this.setState({ lesson })
        }

        //create lesson
        const handleSubmit = async (e, props) => {
            e.preventDefault()
            const payload = {
                user_id: 1,
                language_id: this.props.language.id,
                title: this.state.lesson.title,
                audio: this.state.lesson.audio,
                question: this.state.lesson.question,
                answer: this.state.lesson.answer
            }

            const res = await axios.post(`/api/languages/${this.props.language.id}/lessons/`, payload)
            this.setState({ lesson: payload })
            const reload = await window.location.reload()
        }

        return (
            <LessonAdd>
                <h4>Create Your Lessons</h4>
                <form
                    onSubmit={handleSubmit}>
                    <div>
                        Title:
                    <input
                            value={this.state.lesson.name}
                            onChange={handleChange}
                            name="title"
                            type="text" />
                    </div>
                    <div>
                        Audio:
                    <input
                            value={this.state.lesson.audio}
                            onChange={handleChange}
                            name="audio"
                            type="text" />
                    </div>
                    <div>
                        Quesion:
                    <input
                            value={this.state.lesson.question}
                            onChange={handleChange}
                            name="question"
                            type="text" />
                    </div>
                    <div>
                        Answer:
                    <input
                            value={this.state.lesson.answer}
                            onChange={handleChange}
                            name="answer"
                            type="text" />
                    </div>
                    <button>Submit</button>
                </form>
            </LessonAdd>
        )
    }
}
export default LessonAddForm

///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////

const LessonAdd = styled.div`
width: 50vh;
height:50vh;
margin:12.5px;
box-shadow: 2px 2px 1px rgba(0,0,0,0.25);
border:1px solid darkgray;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  div{
    display: flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  }
`