import { Link } from "gatsby";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Index Page</title>
      <h1>Welcome to the Index Page</h1>
      <Link to="/about">About</Link>
      <p>Do the gatsby tutorial</p>
    </main>
  );
};

export default IndexPage;
