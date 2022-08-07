import { Link } from "gatsby";
import * as React from "react";

type TVerticalPageLayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

const VerticalPageLayout = ({
  pageTitle,
  children,
}: TVerticalPageLayoutProps) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default VerticalPageLayout;

export { VerticalPageLayout };
