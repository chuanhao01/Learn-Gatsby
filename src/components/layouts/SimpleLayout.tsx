/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { Link } from "gatsby";

interface ISimpleLayoutProps {
  pageTitle: string;
  children: JSX.Element;
}

export const SimpleLayout = ({
  pageTitle,
  children,
}: ISimpleLayoutProps): JSX.Element => {
  const SSimpleLayoutContainer = css({
    margin: "auto",
    maxWidth: "500px",
    fontFamily: "sans-serif",
  });
  const SHeading = css({
    color: "rebeccapurple",
  });
  const SNavLinksList = css({
    display: "flex",
    listStyle: "none",
    paddingLeft: 0,
  });
  const SNavLinkItem = css({
    paddingRight: "2rem",
  });
  const SNavLinkItemText = css({
    color: "black",
  });

  return (
    <div css={SSimpleLayoutContainer}>
      <title>{pageTitle}</title>
      <nav>
        <ul css={SNavLinksList}>
          <li css={SNavLinkItem}>
            <Link css={SNavLinkItemText} to="/">
              Index
            </Link>
          </li>
          <li css={SNavLinkItem}>
            <Link css={SNavLinkItemText} to="/About">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 css={SHeading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
