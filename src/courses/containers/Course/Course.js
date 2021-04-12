import React, { Component } from 'react'

export default class Course extends Component {
    state = {
        id: null,
        title: null
    }

    componentDidUpdate() {
        console.log(this.props)
        this.parseQueryParams();
    }

    parseQueryParams = () => {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            //Should not update state in componentDidUpate /Mount - this is only for demo router
            if (this.state.title !== param[1]) {
                this.setState({title: param[1]})
            }
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
                
            </div>
        )
    }
}
