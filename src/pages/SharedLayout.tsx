import { Outlet } from "react-router-dom";
import { Header, MobileHeader } from "../components";

const SharedLayout = () => {
  return (
    <>
      <MobileHeader />
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
