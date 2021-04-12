import React from 'react'
import styles from './Input.css'

const Input = (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = [styles.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid);
        validationError = <p className={styles.ValidationError}>{props.validationMessage}</p>
    }

    switch (props.elementType) {
        case ('input'): 
            inputElement = <input {...props.elementConfig} className={inputClasses.join(' ')} 
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} className={inputClasses.join(' ')} 
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = <select {...props.elementConfig} 
                className={inputClasses.join(' ')} 
                value={props.value}
                onChange={props.changed} >
                {props.elementConfig.options.map(option => (
                    <option value={option.value} key={option.value}>{option.displayValue}</option>
                ))}
            </select>
            break;
        default:
            inputElement = <input {...props.elementConfig} 
                className={inputClasses.join(' ')} 
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <div className={styles.Input}>
            <label className={styles.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}

export default Input
