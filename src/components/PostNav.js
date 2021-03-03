import { useState } from "react";
import { Link } from "react-router-dom";
const PostNav = () => {
  const [toggle, setToggle] = useState("");
  function handleToggle() {
    if (toggle === "") {
      setToggle("checked");
    } else {
      setToggle("");
    }
  }
  return (
    <div className="ind-header">
      <button className="toggle" onClick={handleToggle}>
        <span className="hamburger">
          <span className={`hamburger-inner first toggles ${toggle}`}></span>
          <span className={`hamburger-inner second toggles ${toggle}`}></span>
        </span>
      </button>
      <div className="title">Janos' Blog</div>
      <nav className={`ind-nav toggles ${toggle}`}>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleToggle}>
              About
            </Link>
          </li>
          <li>
            <a
              href="http://janos-blog.22web.org"
              onClick={handleToggle}
              target="_blank"
            >
              My work
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default PostNav;
