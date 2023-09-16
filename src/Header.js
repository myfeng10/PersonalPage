import React from 'react';

function Header() {
  return (
    <header>
      <h1>Hello! <span id="typing"></span><span className="cursor">|</span></h1>
      <form>
        <input type="search" name="q" placeholder="Enter" />
        <input type="submit" value="Search" />
      </form>
    </header>
  );
}

export default Header;
