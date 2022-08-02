import * as React from "react";
import { Link, PageProps } from "gatsby";

type TVerticalPageLayoutAdditionalProp = {
  pageTitle: string;
};
type TVerticalPageLayoutProp = PageProps & TVerticalPageLayoutAdditionalProp;

const VerticalPageLayout = ({
  pageTitle,
  children,
}: TVerticalPageLayoutProp) => {
  return (
    <div>
      <title>{pageTitle}</title>
    </div>
  );
};

export default VerticalPageLayout;
