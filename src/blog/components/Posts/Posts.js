import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import axios from '../../axiosx'
import Post from '../Post/Post'
import styles from './Posts.css'
import FullPost from '../FullPost/FullPost'

export default class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        hasError: false
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Chinv'
                    }
                })
                this.setState({ posts: updatedPosts })
                // console.log(updatedPosts)
            })
            .catch(error => {
                console.log(error)
                // this.setState({hasError: true})
            })
    }

    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id})
        this.props.history.push({ pathname: '/posts/' + id })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.hasError) {
            // console.log(this.state.posts)
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id} >
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />);
                // </Link>);
            });
        }

        return (
            <div>
                <section className={styles.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
        )
    }
}
