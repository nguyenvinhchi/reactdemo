import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styles from './NavigationItems.css'

const NavigationItems = props => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" exact >Burger Builder</NavigationItem>
            { props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
            { props.isAuthenticated 
                ? <NavigationItem link="/logout">Logout</NavigationItem> 
                : <NavigationItem link="/auth">Login</NavigationItem>
            }
        </ul>
    )
}

export default NavigationItems
