import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";
import GoToTopButton from "../Components/GoToTop";

function AppLayout() {
  return (
    <div>
      <Banner />
      <Nav />
      <Outlet />
      <Footer />
      <GoToTopButton />
    </div>
  );
}

export default AppLayout;
