import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="flex items-center bg-[#F2F2F2]">
      <img src="logo.png" alt="logo" className="m-5 lg:ml-20" />
      <nav className="nav w-full">
        <ul className="nav-links flex justify-around mr-8 ml-auto max-w-[800px]">
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "font-resort-sans text-2xl hover:text-[#747474] underline"
                  : "font-resort-sans text-2xl hover:text-[#747474]"
              }
            >
              About US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ai-analysis"
              className={({ isActive }) =>
                isActive
                  ? "font-resort-sans text-2xl hover:text-[#747474] underline"
                  : "font-resort-sans text-2xl hover:text-[#747474]"
              }
            >
              AI Analysis
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "font-resort-sans text-2xl hover:text-[#747474] underline"
                  : "font-resort-sans text-2xl hover:text-[#747474]"
              }
            >
              Contact US
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
