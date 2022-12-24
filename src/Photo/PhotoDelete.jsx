import React from "react";
import { Navigate } from "react-router-dom";
import { PHOTO_DELETE } from "../api";
import useFetch from "../Hooks/useFetch";

import styles from "./PhotoDelete.module.css";

function PhotoDelete({ id }) {
  const { request } = useFetch();
  async function deletePhoto() {
    const { url, options } = PHOTO_DELETE(id);
    const {response } = await request(url, options);
    if(response.ok) window.location.reload();
  }

  return (
    <div>
      <button onClick={deletePhoto} className={styles.delete}>
        Deletar
      </button>
    </div>
  );
}

export default PhotoDelete;
