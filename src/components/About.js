import { useState, useEffect } from "react";
import axios from "axios";
import image from "./never-stop-learning.jpg";
function About() {
  const [page, setPage] = useState(null);
  const [parts, setParts] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://public-api.wordpress.com/wp/v2/sites/janosblog430559579.wordpress.com/pages/29"
      )
      .then((res) => setPage(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (page) {
      const str = page.content.rendered;
      const quoteEnd = str.indexOf("<em>");
      const authorEnd = str.indexOf("</em>") + 5;
      const quote = str.substr(0, quoteEnd);
      const author = str.substr(quoteEnd, authorEnd - quoteEnd);
      const rest = str.substr(authorEnd, str.length);
      setParts({ quote, author, rest });
      console.log(author);
    }
  }, [page]);

  return parts ? (
    <div className="about">
      <div className="left">
        <img src={image} alt="" />
        <figure>
          <blockquote>
            <p dangerouslySetInnerHTML={{ __html: parts.quote }}></p>
          </blockquote>
          <figcaption
            dangerouslySetInnerHTML={{ __html: parts.author }}
          ></figcaption>
        </figure>
      </div>
      <div className="right">
        <h3>About This Blog</h3>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: parts.rest }}
        ></p>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}
export default About;
