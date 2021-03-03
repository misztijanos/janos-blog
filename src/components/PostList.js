import { Link } from "react-router-dom";
export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts
        ? posts.map((post) => (
            <div className="post-item" key={post.ID}>
              <img src={post.post_thumbnail.URL} alt={post.title} width="200" />
              <h3>{post.title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.replace("[&hellip;]", ""),
                }}
              ></p>
              <Link className="continue-reading" to={`/${post.ID}`}>
                Continue reading
              </Link>
            </div>
          ))
        : "Loading"}
    </div>
  );
}
