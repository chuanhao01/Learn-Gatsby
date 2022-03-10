import * as React from "react";
import { Navbar } from "../components/Navbar";

const IndexPage = (): JSX.Element => {
  return (
    <main>
      <Navbar pageTitle="Index Page"></Navbar>
      <h1>Welcome to my site</h1>
    </main>
  );
};

export default IndexPage;
