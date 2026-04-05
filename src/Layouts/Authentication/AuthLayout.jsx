import { Link, Outlet } from "react-router";
import authImage from "../../assets/authImage.png";
import logo from "../../assets/logo.png"

const AuthLayout = () => {
  return (
    <section className="container p-4 mx-auto">
      <Link to='/' className=" relative mb-4">
        <img src={logo} alt="" className="h-10" />
        <h3 className="text-black-12 font-extrabold text-2xl absolute left-4 top-[15px]">
          ZapShift
        </h3>
      </Link>
      <div className="grid md:grid-cols-2 min-h-screen items-center ">
        <Outlet />
        <img src={authImage} alt="None" />
      </div>
    </section>
  );
};

export default AuthLayout;
