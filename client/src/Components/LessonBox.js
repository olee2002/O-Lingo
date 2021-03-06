import React from 'react'
import styled from 'styled-components'
import LessonCreateForm from './LessonCreateForm'
import LessonEditForm from './LessonEditForm'
//extends Component
const LessonBox = (props) => {

    return (
        <Wrapper>
            <button onClick={(e) => props.toggleAdd(e)} >Add Lesson </button>

            {props.isToggled ?
                <LessonCreateForm
                    lessons={props.lessons}{...props}
                    languages={props.languages}{...props}
                    language={props.language}{...props}
                /> : null}
            <Container>

                {props.lessons.map((lesson, index) => {
                    if (props.selectedOption.id !== lesson.language_id) { return null }
                    return (
                        <Lesson key={index}>
                            <div><h3>{lesson.title}</h3></div>
                            <div>
                                <strong>Question</strong>: {lesson.question}  |
                        <strong> Answer</strong>: {lesson.answer}
                            </div>
                            <br />
                            <iframe
                                src={lesson.audio}
                                allowfullscreen>
                            </iframe>
                            <div>
                                <button onClick={props.toggleEdit.bind(this, index)} >Edit</button>
                                <button onClick={(lesson) => { props.deleteLesson(lesson) }}>Delete</button>
                            </div>
                            {props.isSelected[index] ?
                                <LessonEditForm
                                    lessons={props.lessons}{...props}
                                    languages={props.languages}{...props}
                                    language={props.language}{...props}
                                    key={index} />
                                : null}
                            <br />
                        </Lesson>
                    )
                })}
            </Container>
        </Wrapper>
    )
}

export default LessonBox

///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////
const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  button{
      margin: 20px
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`
const Lesson = styled.div`
width: 50vh;
/* height:50vh; */
margin:12.5px;

box-shadow: 2px 2px 1px rgba(0,0,0,0.25);
border:1px solid darkgray;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  iframe{
  border: 1px solid white;
  border-radius: 20px;
  height: 70%;
}
`