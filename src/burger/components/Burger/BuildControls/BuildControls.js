import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]
const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    added={() => props.ingredientAdded(ctrl.type)}    
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    key={ctrl.label} label={ctrl.label} 
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button 
                onClick={props.ordered}
                disabled={!props.purchasable}
                className={styles.OrderButton}>
                    {props.isAuthenticated ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
            </button>
        </div>
    )
}

export default BuildControls
