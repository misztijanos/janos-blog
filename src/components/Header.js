import { NavLink } from "react-router-dom";
import banner from "./banner.jpg";
export default () => {
  const d = new Date();
  return (
    <header>
      <img src={banner} alt="banner" />
      <nav className="banner-nav">
        <div className="site-title">
          <NavLink to="/">
            <h1>Janos' Blog</h1>
          </NavLink>

          <p>{d.toDateString()}</p>
        </div>
        <ul>
          <li>
            <NavLink to="/">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a href="http://misztijanos.22web.org" target="_blank">
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
