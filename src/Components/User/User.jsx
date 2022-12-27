import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";
import { UserContext } from "../../Context/UserContext";
import NotFound from "../Helper/NotFound";

function User() {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </section>
  );
}

export default User;
