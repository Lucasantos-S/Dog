import React from "react";
import { PHOTO_POST } from "../../api";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import styles from "./UserPhotoPost.module.css";

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      previewUrl: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
        className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        ></input>
        <Button>Enviar</Button>
      </form>
      <div>
        {img.previewUrl && (
          <div
            className={styles.preview}
            style={{ background: ` url(${img.previewUrl})` }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default UserPhotoPost;
