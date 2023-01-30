import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSOWORD_RESET } from "../../api";
import { useNavigate } from "react-router-dom";
import Error from "../Helper/Error";

function LoginPasswordReset() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const { data, error, loading, request } = useFetch();
  const navigation = useNavigate();
  const password = useForm();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      console.log();
      const { url, options } = PASSOWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response, json } = await request(url, options);
      if (response.ok) navigation("/login");
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Digite a nova senha</h1>
      <form onSubmit={handleSubmit}>
        <Input name="password" type="password" {...password}></Input>
        {loading ? (
          <Button disabled>Mudando senha...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <Error error={error}/>
    </section>
  );
}

export default LoginPasswordReset;
