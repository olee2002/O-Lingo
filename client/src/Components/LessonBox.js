import React from 'react';

const LessonBox = (props) => {
    console.log("helloFromLessonBoxa:"+JSON.stringify(props))




    let start = function () {
        const randomLesson = props.lessons[Math.floor(Math.random() * props.lessons.length)];
        console.log('fromRandomLess'+randomLesson )
        }


    return (
        <div>
            This message is from LessonBox
        </div>
    );
};

export default LessonBox;