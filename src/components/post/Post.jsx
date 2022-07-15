import React, { useState } from "react"
import styles from './Post.module.css';
import UserInfo from "../userInfo/UserInfo";
import axios from 'axios'

function Post() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async() => {
            try{
                const {data} = await axios.get('http://0.0.0.0:8000/api/getPosts/')

                setPosts(data)

            } catch(error) {
                console.log(error)
            }

            setLoading(false)
        }
        fetchData()
    }, [])

  return (
    <div>
        <UserInfo/>
        <div className={styles.TopHider}></div>
        <div className={styles.BottomHider}></div>
        {loading && 'Loading ...'}
        
        <div className={styles.PostsList}>
            {posts.map(post => (
                    <div key={post.theme} className={styles.Post}>
                        <div className={styles.PostTheme}>{post.theme}</div>
                        <div className={styles.PostText}>{post.text} </div>
                        <div className={styles.PostAuthor}>@gaiko</div>
                    </div>
                ))}
        </div>
    </div>
  );
}

export default Post;
