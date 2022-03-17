// import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { SimpleLayout } from "components/layouts/SimpleLayout";

const About = (): JSX.Element => {
  // interface IIconImageData {
  //   allFile: {
  //     nodes: {
  //       absolutePath: string;
  //     }[];
  //   };
  // }
  // const iconImageData: IIconImageData = useStaticQuery(graphql`
  //   {
  //     allFile(
  //       filter: { sourceInstanceName: { eq: "images" }, name: { eq: "icon" } }
  //     ) {
  //       nodes {
  //         absolutePath
  //       }
  //     }
  //   }
  // `);
  return (
    <SimpleLayout pageTitle="About Page">
      <>
        <h1>This is the about pagge</h1>
        <StaticImage src="../../data/images/icon.png" alt="some guy" />
      </>
    </SimpleLayout>
  );
};

export default About;
