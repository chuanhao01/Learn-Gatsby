import * as React from "react";
import { SimpleLayout } from "../components/layouts/SimpleLayout";

const IndexPage = (): JSX.Element => {
  return (
    <SimpleLayout pageTitle="Index Page">
      <h1>Welcome to my site</h1>
    </SimpleLayout>
  );
};

export default IndexPage;
