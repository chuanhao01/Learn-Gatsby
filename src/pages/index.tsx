import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my site</h1>
      <ul>
        <li>
          <Link to="/About">About Page</Link>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
