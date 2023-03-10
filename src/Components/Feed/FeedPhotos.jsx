import React from "react";
import styles from "./FeedPhotos.module.css";
import { PHOTOS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotoItem from "./FeedPhotoItem";

function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      let total = 6;
      const { url, options } = PHOTOS({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [user, page , setInfinite]);

  if (error) return <Error error={error}></Error>;
  if (loading) return <Loading></Loading>;
  if (data)
    return (
      <ul className={` ${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
}

export default FeedPhotos;
