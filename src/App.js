import "./global-styles.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import PostList from "./components/PostList";
import About from "./components/About";
import Post from "./components/Post";
import Header from "./components/Header";
import PostNav from "./components/PostNav";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    document.title = "Janos' Blog";
    axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/janosblog430559579.wordpress.com/posts/"
      )
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <PostList posts={posts} />
          </Route>
          <Route path="/about">
            <PostNav />
            <About />
          </Route>
          <Route path="/:id">
            <PostNav />
            <Post />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
