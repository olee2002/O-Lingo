
// Importing React
import React from 'react'
import { Redirect} from 'react-router-dom'
import styled from 'styled-components'


const LessonAddForm = (props) => {
  
    return (
        <div>
            <h2>Create Your Lessons</h2>
            <form 
            onSubmit={props.handleSubmit}>
                    <div>
                    title:
                    <input
                        value={props.lesson.name}
                        type="text"
                        onChange={props.handleChange}
                        name="title"/>
                    </div>
                    <div>
                    audio:
                    <input
                        value={props.lesson.audio}
                        onChange={props.handleChange}
                        name="audio"
                        type="text"/>
                    </div>
                    <div>
                    quesion:
                    <input
                        value={props.lesson.audio}
                        onChange={props.handleChange}
                        name="audio"
                        type="text"/>
                    </div>
                    <div>
                    answer:
                    <input
                        value={props.lesson.audio}
                        onChange={props.handleChange}
                        name="audio"
                        type="text"/>
                    </div>
    
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LessonAddForm
