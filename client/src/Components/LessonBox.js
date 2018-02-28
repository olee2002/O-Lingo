import React from 'react';

const LessonBox = (props) => {
// console.log('hello:'+JSON.stringify(props.lessons))


    return (
        <div> 
            {props.lessons.map((lesson, i) => {
                // console.log('FromLEssonBox LessonlanguageId:'+lesson.language_id)
                // console.log('FromLEssonBox languageId:'+props.selectedOption.id)
                 if (props.selectedOption.id!==lesson.language_id){return null}
                return (
                   
                    <div key={i}>
                        <h4>{lesson.title}</h4>
                        <h5>Question: {lesson.question} </h5>
                        <h5>Answer: {lesson.answer}</h5><br />
                        <iframe
                            width="400"
                            height="300"
                            src={lesson.audio}
                            // frameborder="0"
                            // allow="autoplay; encrypted-media"
                            allowfullscreen>
                        </iframe>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default LessonBox
