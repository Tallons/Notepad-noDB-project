import React from "react";

function Header (){

  return (
      <div>
        <div className="header-box">
          <header>
            <img className="logo"/>
            <span>Home</span>
          </header>
          <nav>
            <div className="avatar"></div>
            <span>     Account    </span>
            <span>Settings</span>
          </nav> 
        </div>
      </div>
  )
}

export default Header;