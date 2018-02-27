import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'

import 'react-select/dist/react-select.css';

import LessonBox from './LessonBox.js'

class LanguageList extends Component {
    state = {
        selectedOption: '',
        languages: [],
        lessons: [],
        redirect: false
    }


    //Using axios to get all the users
    async componentWillMount() {
        this.getLanguages()
        console.log(this.state.languages)

    }
    getLanguages = async () => {
        const res = await axios.get('/api/languages')
        // console.log('Languages:' + JSON.stringify(res.data))
        this.setState({ languages: res.data })
    }

    getLessons = async () => {
        this.state.languages.map((language, i) => {
            // const res = axios.get(`/api/languages/${language_id}/lessons`)
            // console.log('Lessons:' + JSON.stringify(res.data))
            // this.setState({ lessons: res.data })
        })
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // console.log(`Selected: ${selectedOption.lable}`);
    }
    render() {
        const { selectedOption } = this.state;
        const { languages } = this.state;
        const allLanguages = this.state.languages.map((language, i) => {
            return ({ value: language.name, label: language.name })
        })
        // console.log('mapLanuage:'+ JSON.stringify(allLanguages))
        // console.log('FromRender:'+languages)
        const value = selectedOption && selectedOption.value;
        const style = {
            width: '50vh'
        }
        return (
            <div>
                <Select
                    name="form-field-name"
                    value={value}
                    style={style}
                    onChange={this.handleChange}
                    options={allLanguages} />
                <LessonBox languages={this.state.languages}{...this.props} />
            </div>
        )
    }
}

export default LanguageList