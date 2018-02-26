import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'

import 'react-select/dist/react-select.css';

import LessonBox from './LessonBox.js'

class LanguageList extends Component {
    state = {
        selectedOption: '',
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

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    render() {
        const { selectedOption } = this.state;
        const {languages} = this.state;
        const value = selectedOption && selectedOption.value;
        const style = {
            width: '50vh'
        }
        return (
            <div>
                {languages.map((language, i) => {
                    return (
                        <div key={1}>
                        language:{language.name}<br/>
                        location:{language.location}<br/>
                        language:<img src={language.img_url}/><br/>
                        </div>
                    )
                })}
            <Select
                name="form-field-name"
                value={value}
                style={style}
                onChange={this.handleChange}
                options={[
                    { value: 'Korean', label: 'Korean' },
                    { value: 'Italian', label: 'Italian' },
                    { value: 'Engish', label: 'English' },
                    { value: 'Chinese', label: 'Chinese' },
                    { value: 'Spanish', label: 'Spanish' },
                ]} />
                <LessonBox/>
                </div>
        )
    }
}

export default LanguageList