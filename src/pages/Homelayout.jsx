import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Homelayout = () => {
  return (
    <div>
      <NavBar />

      <section className=" bg-gray-50">
        <Outlet />
      </section>
    </div>
  );
};

export default Homelayout;
