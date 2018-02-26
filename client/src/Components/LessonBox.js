import React, { Component } from 'react'
import axios from 'axios'

class LessonBox extends Component {

//Using axios to get all the users
async componentWillMount() {
    const res = await axios.get('/api/languages')
    console.log('USERS:' + res.data)
    this.setState({ users: res.data })
}


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LessonBox;