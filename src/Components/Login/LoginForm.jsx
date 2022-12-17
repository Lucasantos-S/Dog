import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from "../../Context/UserContext";
import Error from "../Helper/Error";
import style from "./LoginForm.module.css";
import styleBtn from "../Forms/Button.module.css";

function LoginForm() {
  const { userLogin, error, loading } = React.useContext(UserContext);
  // const [passwordVisible, setPasswordVisible] = React.useState("");

  // const passwordcheckbox = useForm();
  const username = useForm();
  const password = useForm();

  // React.useEffect(() => {
  //   if (passwordcheckbox.checked) {
  //     setPasswordVisible("text");
  //   } else {
  //     setPasswordVisible("password");
  //   }
  // }, [passwordcheckbox.checked]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input
          label="Login"
          type="text"
          id="username"
          name="login"
          {...username}
        />
        <div className={style.password}>
          <Input
            label="Senha"
            type='password'
            id="username"
            name="senha"
            {...password}
          />
         
        </div>

        <Error error={error} />

        {loading ? <Button disabled>Enviar</Button> : <Button>Enviar</Button>}
      </form>
      <Link className={style.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastra-se</h2>
        <p>Ainda não possui conta? cadastra-se no site.</p>
        <Link className={styleBtn.button} to="/login/criar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
