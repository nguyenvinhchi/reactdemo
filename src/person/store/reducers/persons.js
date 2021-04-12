import * as actionTypes from '../action'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: [...state.persons, {id: new Date().getTime(), name: action.person.name, age: action.person.age}]
            }
        case actionTypes.DELETE_PERSON:
            const updatedPersons = [...state.persons]
            return {
                ...state,
                persons: updatedPersons.filter(person => person.id !== action.personId)
            }
    }

    return state;
}

export default reducer;
