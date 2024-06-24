import React from "react";
import Logo from "../../assets/icon.svg";
export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <h3>Meme Generator</h3>
    </header>
  );
}
