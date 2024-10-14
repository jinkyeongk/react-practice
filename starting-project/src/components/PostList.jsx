
import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';

function PostList(){
    //useState는 원하는 만큼 호출 가능 
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
        <Modal>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange = {authorChangeHandler}
            />
        </Modal>
            <ul className={classes.posts}>
                <Post author= {enteredAuthor} body = {enteredBody} />
                <Post author="Jennie" body =  "Check it! "/>
            </ul>
        </>
    );
}

export default PostList;