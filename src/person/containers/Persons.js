import React, { Component } from 'react'
import AddPerson from '../components/AddPerson/AddPerson'
import Person from '../components/Person/Person'
import { connect } from 'react-redux'


class Persons extends Component {
    

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeleted(person.id)} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAdded: (person) => dispatch({type: 'ADD_PERSON', person}),
        personDeleted: (personId) => dispatch({type: 'DELETE_PERSON', personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
