import React from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSOWORD_LOST } from "../../api";
import Error from "../Helper/Error";

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      console.log();
      const { url, options } = PASSOWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Login ou E-mail" {...login} />
          {loading ? (
            <Button disabled>Enviar...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
