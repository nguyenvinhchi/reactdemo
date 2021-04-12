import React, { Component } from 'react'
import {Switch, Route, Redirect } from 'react-router-dom'
import Courses from '../Courses/Courses'
import NoMatch from '../NoMatch/NoMatch'
import Users from '../Users/Users'

export default class CoursesHome extends Component {

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/users">Users</a></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/courses" component={Courses} />
                    <Route path="/users" component={Users} />
                    <Redirect path="/all-courses" to="/courses" />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}
