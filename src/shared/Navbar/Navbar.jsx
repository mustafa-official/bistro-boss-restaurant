import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const [cart] = useCart();
  // console.log(cart.length);

  const handleLogout = () => {
    logOutUser().then(() => {
      toast.success("Logout Successfully");
      navigate("/login");
    });
  };
  return (
    <div className="  backdrop-blur-md max-w-screen-xl mx-auto px-4 inset-x-0 z-10 bg-opacity-50 bg-black text-white">
      <div className="py-3">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              BISTRO BOSS
            </Link>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <LuMenu className="text-2xl"></LuMenu>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex gap-6 flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-[#43ec76]" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => (isActive ? "text-[#43ec76]" : "")}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "text-[#43ec76]" : "")}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? "text-[#43ec76]" : "")}
              >
                Our Menu
              </NavLink>
              <NavLink
                to="/shop/salad"
                className={({ isActive }) => (isActive ? "text-[#43ec76]" : "")}
              >
                Our Shop
              </NavLink>
              <NavLink
                to="/secret"
                className={({ isActive }) => (isActive ? "text-[#43ec76]" : "")}
              >
                Secret
              </NavLink>
              {user && (
                <button
                  onClick={handleLogout}
                  className="text-white border border-white rounded-lg px-4 py-1"
                >
                  Logout
                </button>
              )}
              {!user && (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-[#43ec76]" : ""
                  }
                >
                  Login
                </NavLink>
              )}

              <div className="indicator">
                <span className="indicator-item badge badge-secondary">{cart?.length}</span>
                <Link to="/dashboard"><FaShoppingCart className="text-3xl"></FaShoppingCart></Link>
              </div>
            </div>

            {/* <div className="flex items-center mt-4 lg:mt-0">
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
