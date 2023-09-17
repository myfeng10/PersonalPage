import React from 'react';
import TypingEffect from "../../effects/TypingEffect";
function Header() {
  return (
    <header>
      <h1>Hello! <span id="typing">{<TypingEffect text="This is Michelle!" />}</span><span className="cursor">|</span></h1>
      <form>
        <input type="search" name="q" placeholder="Enter" />
        <input type="submit" value="Search" />
      </form>
    </header>
  );
}

export default Header;
