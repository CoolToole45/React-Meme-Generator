import React from "react";
import Logo from '../img/Troll Face.svg'
import '../css/Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <img 
        src={Logo}
        alt="logo"/>
        <h1>Meme Generator</h1>
      </div>
      <div className="module-info">
        <h2>React Course - Project 3</h2>
      </div>
    </div>
  )
}