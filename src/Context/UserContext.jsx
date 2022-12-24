import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDADE_POST, USER_GET } from "../api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      if (window.confirm("deseja sair mesmo da conta?")) {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem("token");
        navigate("/login");
      } else {
        return false;
      }
    },
    [navigate]
  );

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const userRes = await fetch(url, options);
    const json = await userRes.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Login ou senha invalido`);
      const { token } = await tokenRes.json();
      setLogin(true);
      window.localStorage.setItem("token", token);
      getUser(token);
      navigate("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      navigate("/");
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDADE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token invalido");
          await getUser(token);
          navigate("/conta");
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }else{
        setLogin(false);
      }
    }

    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        login,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
