import React, { Component } from 'react'
import axios from 'axios'
// import Select from 'react-select'
// import 'react-select/dist/react-select.css';

import LessonBox from './LessonBox.js'

class LanguageList extends Component {
    state = {
        selectedOption: '',
        languages: [],
        lessons: [],
        id:'',
        redirect: false
    }


    //Using axios to get all the users
    async componentWillMount() {
        this.getLanguages()
        // this.getLessons()

    }
    getLanguages = async () => {
        const res = await axios.get('/api/languages')
        // console.log('Languages:' + JSON.stringify(res.data))
        this.setState({ languages: res.data })
    }
   
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // console.log(`Selected: ${selectedOption.lable}`);
    }
    render() {
        const { selectedOption } = this.state;
        const { languages } = this.state;
        const allLanguages = this.state.languages.map((language, i) => {
            return <option key={i} value= {language.name}>{language.name}</option>
        })
        // console.log('mapLanuage:'+ JSON.stringify(allLanguages))
        // console.log('FromRender:'+languages)
        const value = selectedOption && selectedOption.value;
        const style = {
            width: '50vh'
        }
        return (
            <div>
                <select>{allLanguages}</select>
                {/* <Select
                    name="form-field-name"
                    value={value}
                    style={style}
                    onChange={this.handleChange}
                    options={allLanguages} /> */}
                <LessonBox languages={this.state.languages}{...this.props} />
            </div>
        )
    }
}

export default LanguageList