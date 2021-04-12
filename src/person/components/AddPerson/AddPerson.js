import React, { Component } from 'react'
import styles from './AddPerson.css'

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render() {
        return (
            <div className={styles.AddPerson}>
                <input type='text' name='name' placeholder='Name' onChange={this.nameChangedHandler} value={this.state.name} />
                <input type='number' name='age' placeholder='Age' onChange={this.ageChangedHandler} value={this.state.age} />
                <button onClick={() => this.props.personAdded({...this.state})}>Add Person</button>
            </div>
        )
    }
}

export default AddPerson
