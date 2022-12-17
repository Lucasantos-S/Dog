import React from "react";
import { USER_POST } from "../../api";
import { UserContext } from "../../Context/UserContext";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm.JSX";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function userCreate(event) {
    event.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastra-se</h1>
      <form onSubmit={userCreate}>
        <Input label="Nome" type="text" name="nome" {...username}></Input>
        <Input label="E-mail" type="email" name="email" {...email}></Input>
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        ></Input>

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error}></Error>
      </form>
    </section>
  );
}

export default LoginCreate;
