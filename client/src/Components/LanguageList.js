import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import LessonBox from './LessonBox.js'

class LanguageList extends Component {
    state = {
        selectedOption: '',
        languages: [],
        language: {},
        languageId: "",
        lessons: []
    }

    //Using axios to get all languages and lessons
    getAllData = async () => {
        //All Languages
        const res = await axios.get('/api/languages')
        this.setState({ languages: res.data })
        res.data.map((language) => {
            //Single Language
            this.setState({ language: language, languageId: language.id })
        })
        //Lessons
        const resLesson = await axios.get(`/api/languages/${this.state.languageId}/lessons`)
        // console.log('fromGetAllData:' + JSON.stringify(resLesson.data))
        this.setState({ lessons: resLesson.data })
    }

    handleChange = (selectedOption) => {

        this.setState({ language: selectedOption, selectedOption: selectedOption });
    }
    async componentWillMount() {
        this.getAllData()

    }

    render() {
        const { selectedOption } = this.state;
        const { languages } = this.state;
        const { language } = this.state;
        const { languageId } = this.state;
        const { lessons } = this.state;
        // console.log(this.state.selectedOption)
        // console.log('Render-language:' + JSON.stringify(language))
        // console.log('Render-languageId:' + JSON.stringify(languageId))
        // console.log('Render-lessons:' + JSON.stringify(lessons))
        const allLanguages = this.state.languages.map((language, i) => {
            return ({ value: language.name, label: language.name, id: language.id })
        })
        // console.log('mapLanuage:'+ JSON.stringify(allLanguages))
        // console.log('FromRender:'+languages)
        const value = selectedOption.value && selectedOption.value;
        // console.log('WhatisValue' + selectedOption.value)
        const style = {
            width: '50vh'
        }
        return (
            <div>
                <h4>Select A Language To Practice</h4>
                <Select
                    name="form-field-name"
                    value={value}
                    style={style}
                    onChange={this.handleChange}
                    options={allLanguages} />

                {selectedOption ?
                    <LessonBox
                        language={language}
                        languages={languages}
                        lessons={lessons}
                        selectedOption={selectedOption}
                    />
                    : null
                }
            </div>
        )
    }
}

export default LanguageList