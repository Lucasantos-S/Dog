import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";

import style from "./Login.module.css";
import NotFound from "../Helper/NotFound";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
