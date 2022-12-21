import React from "react";
import { UserContext } from "../Context/UserContext";
import PhotoComentsForm from "./PhotoComentsForm";
import styles from "./PhotoComments.module.css";

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);


  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author} </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoComentsForm id={props.id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;
