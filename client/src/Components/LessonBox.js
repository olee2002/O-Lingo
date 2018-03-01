import React from 'react'
import styled from 'styled-components'
import LessonCreateForm from './LessonCreateForm'

const LessonBox = (props) => {
    // console.log('hello:'+JSON.stringify(props.lessons))
    return (
        <Container>
            
            <button onClick={props.toggleLessonAdd} >Add Lesson </button>
            
            {props.isToggled ?
            <LessonCreateForm
                            lessons={props.lessons}{...props}
                            languages={props.languages}{...props}
                            language={props.language}{...props}  
                        /> : null}
            {props.lessons.map((lesson, i) => {
                // console.log('FromLEssonBox LessonlanguageId:'+lesson.language_id)
                // console.log('FromLEssonBox languageId:'+props.selectedOption.id)
                if (props.selectedOption.id !== lesson.language_id) { return null }
                return (
                    
                    <Lesson key={i}>
                        <div><h3>{lesson.title}</h3>
                        {/* <button
                    onClick={(lesson) => { props.deleteLesson(lesson) }}>
                    X
                </button> */}
                </div>
                        <div>
                            <strong>Question</strong>: {lesson.question}  |
                        <strong> Answer</strong>: {lesson.answer}
                        </div>
                        <br />
                        <iframe
                            src={lesson.audio}
                            // frameborder="0"
                            // allow="autoplay; encrypted-media"
                            allowfullscreen>
                        </iframe>
                        <br />
                    </Lesson>
                )
            })}
        </Container>
    )
}

export default LessonBox

///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`
const Lesson = styled.div`
width: 50vh;
height:50vh;
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