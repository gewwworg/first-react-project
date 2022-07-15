import React from "react"
import styles from './Creator.module.css';
import UserInfo from "../userInfo/UserInfo";
import axios from "axios";

import {useRef} from 'react';


function Post() {
  const theme = useRef(null);
  const text = useRef(null);

  function handleClick() {
    axios.post('http://0.0.0.0:8000/api/createPost', { post_theme: theme.current.value, post_text: text.current.value})
        .then(response => this.setState({ articleId: response.data.id }))
  }
  
  return (
    <div>
        <UserInfo/>
        <div className={styles.CreationBox}>
        <div className={styles.PostTheme}>Post theme</div>
        <input type="text" ref={theme} name="" id="" placeholder="put your theme" className={styles.PostThemeInput} />
        <div className={styles.PostTheme}>Post text</div>
        <textarea type="text" ref={text} name="" id="" placeholder="put your theme" className={styles.PostTextInput} />
        <button onClick={handleClick} className={styles.CreateBtn}>create</button>
        </div>
    </div>
  );
}

export default Post;
