import React, { Fragment } from 'react'
import styles from './Layout.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  )
}


export default Layout
