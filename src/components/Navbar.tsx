import * as React from "react";
import { Link } from "gatsby";

interface INavbarProps {
  pageTitle: string;
}

export const Navbar = ({ pageTitle }: INavbarProps): JSX.Element => {
  return (
    <div>
      <p>{pageTitle}</p>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  );
};
