import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = ({ links }) => {
  return (
    <div className="w-200 bg-white p-5 mt-8">
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-4 text-main-green font-bold">
            {link.to ? <NavLink to={link.to}>{link.text}</NavLink> : link.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
