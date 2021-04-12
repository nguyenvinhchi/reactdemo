import axios from 'axios'
import React, { Component } from 'react'
import styles from './NewPost.css'

export default class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Chinv'
    }

    addPostHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }

        axios.post('/posts', data)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        // console.log(this.props)
        return (
            <div className={styles.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} >
                    <option value="Chinv">Chi</option>
                    <option value="Max">Max</option>
                </select>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
        )
    }
}
