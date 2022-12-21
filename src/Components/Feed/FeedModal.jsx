import React from "react";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import PhotoContent from "../../Photo/PhotoContent";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedModal.module.css";

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();


  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
    
  }, [photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}></Error>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
