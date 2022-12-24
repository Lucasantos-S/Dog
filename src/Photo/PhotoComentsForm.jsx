import React from "react";
import { COMENT_POST } from "../api";
import { ReactComponent as Enviar } from "../Assets/enviar.svg";
import Error from "../Components/Helper/Error";
import useFetch from "../Hooks/useFetch";
import  styles from './PhotoComentsForm.module.css'

function PhotoComentsForm({ id, setComments }) {
  const { request, error } = useFetch();

  const [comment, setComment] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Error error={error}></Error>
      <textarea 
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}>
        <Enviar />
      </button>      
    </form>
  );
}

export default PhotoComentsForm;
