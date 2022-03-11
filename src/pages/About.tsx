import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { SimpleLayout } from "../components/layouts/SimpleLayout";

const About = (): JSX.Element => {
  return (
    <SimpleLayout pageTitle="About Page">
      <>
        <h1>This is the about pagge</h1>
        <StaticImage
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          alt="some guy"
        />
      </>
    </SimpleLayout>
  );
};

export default About;
