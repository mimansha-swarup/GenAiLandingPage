import React from "react";
import { FaCaretDown } from "react-icons/fa";
import "./style.css";
import Button from "../Button";

const navRoutes = {
  section1: [
    { title: "Home Page", path: "/" },
    { title: "Generator", path: "/generator" },
    { title: "Pricing-plan", path: "/pricing" },
    { title: "Blog-News", path: "/blog" },
  ],
  section2: [
    { title: "About us", path: "/about" },
    { title: "Features", path: "/features" },
    { title: "Collection-2023", path: "/collection" },
    { title: "Career", path: "/career" },
  ],
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <p className="nav-brand">AIPatrn</p>
      <div className="action">
        <div className="action-nav">
          {Object.entries(navRoutes)?.map((navSection) => (
            <ul key={navSection[0]}>
              {navSection[1]?.map((navLink) => (
                <li key={navLink.title}>{navLink.title}</li>
              ))}
            </ul>
          ))}
        </div>
        <Button type="secondary">
          Menu <FaCaretDown />{" "}
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
