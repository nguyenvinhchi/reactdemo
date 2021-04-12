import axios from 'axios';
import React, { Component } from 'react'
import styles from './FullPost.css'

export default class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.match.params.id) {
            if (!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id) {
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then(response => {
                        // console.log(response)
                        this.setState({loadedPost: response.data})
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(response => {
                console.log(response)
            })
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>
        }
        if (this.state.loadedPost) {
            // console.log(this.state.loadedPost)
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={styles.Edit}>
                        <button 
                            className="Delete"
                            onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}
