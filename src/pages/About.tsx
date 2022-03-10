import * as React from "react";
import { Navbar } from "../components/Navbar";

const About = (): JSX.Element => {
  return (
    <main>
      <Navbar pageTitle="About Page"></Navbar>
      <h1>This is the about page</h1>
    </main>
  );
};

export default About;
