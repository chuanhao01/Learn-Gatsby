import * as React from "react";
import { Link } from "gatsby";

const About = (): JSX.Element => {
  return (
    <main>
      <h1>This is the about page</h1>
      <ul>
        <li>
          <Link to="/">Index Page</Link>
        </li>
      </ul>
    </main>
  );
};

export default About;
