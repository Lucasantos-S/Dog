import React from "react";
import { Link } from "react-router-dom";
import Image from "../Components/Helper/Image";
import { UserContext } from "../Context/UserContext";
import PhotoComments from "./PhotoComments";
import styles from "./PhotoContent.module.css";
import PhotoDelete from "./PhotoDelete";

function PhotoContent({ data }) {
  const { data: user } = React.useContext(UserContext);

  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <div className={styles.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            {user && user.nome == photo.author ? <PhotoDelete id={photo.id} /> : null}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </div>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}> {photo.title} </Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade == 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}

export default PhotoContent;
