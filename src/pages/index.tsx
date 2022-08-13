import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import { VerticalPageLayout } from "components/layouts/VerticalPageLayout";

const IndexPage = () => {
  return (
    <VerticalPageLayout pageTitle="Home Page">
      <p>Do the gatsby tutorial</p>
      <StaticImage
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        alt="Some Image"
      ></StaticImage>
    </VerticalPageLayout>
  );
};

export default IndexPage;
