import React, { Component } from 'react'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import { increment, storeResult } from '../../store/actions/index'

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrease" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterState.counter,
        storedResults: state.resultsState.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREASE}),
        onAddCounter: (value) => dispatch({ type: actionTypes.ADD, value}),
        onSubtractCounter: (value) => dispatch({ type: actionTypes.SUB, value}),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (resultId) => dispatch({type: actionTypes.DELETE_RESULT, resultId})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
