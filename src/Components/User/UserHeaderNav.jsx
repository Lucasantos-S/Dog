import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./UserHeaderNav.module.css";
import UseMedia from "../../Hooks/UseMedia";

import { UserContext } from "../../Context/UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const mobile = UseMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation()
  React.useEffect(()=> {
    setMobileMenu(false)
  },[pathname])

  return (
    <>
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu&& styles.mobileMenuActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>}

      <nav className={`${ mobile? styles.navMobile : styles.nav} ${mobileMenu &&  styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          {" "}
          <MinhasFotos />
          {mobile && "Minha Conta"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          {" "}
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
