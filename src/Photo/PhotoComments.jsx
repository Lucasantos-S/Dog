import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import PhotoComentsForm from "./PhotoComentsForm";
import styles from "./PhotoComments.module.css";

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
    

  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <Link to={`/perfil/${comment.comment_author}`}>
              {" "}
              <b>{comment.comment_author} </b>
            </Link>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoComentsForm id={props.id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;
