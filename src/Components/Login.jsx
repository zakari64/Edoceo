
import React from 'react';
import '../styles/login.css';

const SlideNavbar = () => {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label className="lbl" htmlFor="chk" aria-hidden="true">Inscription</label>
          <input className="inputs" type="text" name="txt" placeholder="User name" required />
          <input className="inputs" type="email" name="email" placeholder="Email" required />
          <input className="inputs" type="text" name="tele" placeholder="Telephone" required />
          <input className="inputs" type="password" name="pswd" placeholder="Password" required />
          <button className='loginBtn' type="button">Inscription</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label className="inputs" htmlFor="chk" aria-hidden="true">Connexion</label>
          <input className="inputs" type="email" name="email" placeholder="Email" required />
          <input className="inputs" type="password" name="pswd" placeholder="Password" required />
          <button className='loginBtn' type="button">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default SlideNavbar;