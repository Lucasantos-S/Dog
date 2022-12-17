import React from "react";
import styles from "./FeedPhotosItem.module.css"
function FeedPhotoItem({ photo, id }) {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotoItem;
