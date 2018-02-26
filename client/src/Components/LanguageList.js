import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css';

class LanguageList extends Component {
    state = {
        selectedOption: '',
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        const style = {
            width: '50vh',
        }
        return (
            
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
        )
    }
}

export default LanguageList