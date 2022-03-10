/** @jsx jsx */

import { jsx } from "@emotion/react";
import { Link } from "gatsby";

interface ISimpleLayoutProps {
  pageTitle: string;
  children: JSX.Element;
}

export const SimpleLayout = ({
  pageTitle,
  children,
}: ISimpleLayoutProps): JSX.Element => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};
