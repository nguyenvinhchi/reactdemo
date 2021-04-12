import React from 'react'
import styles from './Post.css'

const Post = (props) => {
    console.log(props)
    return (
        <article className={styles.Post}
            onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div>
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

export default Post;
