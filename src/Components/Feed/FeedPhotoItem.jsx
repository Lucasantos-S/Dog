import React from "react";
import styles from "./FeedPhotosItem.module.css"
function FeedPhotoItem({ photo, setModalPhoto}) {

    function handleClick(){
        setModalPhoto(photo)
  
    }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotoItem;
