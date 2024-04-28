
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/user.svg";
import search from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/cart.svg";
import MenuButton from "../../components/template/header/MenuButton";
import MenuIcon from "../../components/template/header/MenuIcon";

export default function Header() {
  const menuOptions = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "Shop",
      path: "/shop"
    },
    {
      id: 3,
      name: "About",
      path: "/about"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    }
  ];

  const menuIcons = [
    {
      id: 5,
      path: "",
      icon: user
    },
    {
      id: 6,
      path: "",
      icon: search
    },
    {
      id: 7,
      path: "",
      icon: heart
    },
    {
      id: 8,
      path: "",
      icon: cart
    }
  ];

  return (
    <header className="grid grid-cols-3 h-20 justify-center items-center">
      {/* Logo */}
      <Link to="/home" className="flex items-center ml-16">
        <img src={logo} alt="Logo" />
      </Link>

      {/* Menu de Opções */}
      <div className="grid grid-cols-4 gap-10">
        {menuOptions.map((option) => (
          <MenuButton key={option.id} name={option.name} path={option.path} />
        ))}
      </div>

      {/* Ícones do Menu */}
      <div className="flex justify-center items-center">
        <div className="flex gap-12">
          {menuIcons.map((icon) => (
            <MenuIcon key={icon.id} path={icon.path} icon={icon.icon} />
          ))}
        </div>
      </div>
    </header>
  );
}
