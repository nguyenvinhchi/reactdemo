import React, { Component } from 'react'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost';
import styles from './Blog.css';
import Posts from '../../components/Posts/Posts';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

class Blog extends Component {
    
    render() {
        
        
        return (
            <div className={styles.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: 'blue',
                                        textDecoration: 'underline'
                                    }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post"  component={NewPost} />
                    <Route path="/posts"  component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/posts/:id" component={FullPost} /> */}
                </Switch>
            </div>
        )
    }
}

export default Blog;
