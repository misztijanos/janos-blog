import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Post() {
  const [post, setPost] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://public-api.wordpress.com/rest/v1.1/sites/janosblog430559579.wordpress.com/posts/${id}`
      )
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("The error is: " + err));
  }, [id]);
  return post ? (
    <div className="ind-post">
      <img src={post.featured_image} alt="asdf" />
      <div className="content">
        <h3>{post.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}
