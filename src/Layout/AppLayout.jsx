import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Banner />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
