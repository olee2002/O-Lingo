import React, { Component } from 'react'
import axios from 'axios'

class LessonBox extends Component {

    state = {
        languages: [],
        newlanguage: {},
        redirect: false
    }

    //Using axios to get all the users
    async componentWillMount() {
        const res = await axios.get('/api/languages')
        console.log('Languages:' + JSON.stringify(res.data))
        this.setState({ languages: res.data })
    }


    render() {
        return (
            <div>
                {this.state.languages.map((language, i) => {
                    return (
                        <div key={1}>
                        language:{language.name}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default LessonBox;