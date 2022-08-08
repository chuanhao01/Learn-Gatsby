/** @jsx jsx */
import { Link } from "gatsby";
import * as React from "react";

import { css, jsx } from "@emotion/react";

type TVerticalPageLayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

const VerticalPageLayout = ({
  pageTitle,
  children,
}: TVerticalPageLayoutProps) => {
  const SContainer = css({
    margin: "auto",
    maxWidth: "500px",
    fontFamily: "sans-serif",
  });
  const SNavLinks = css({ display: "flex", listStyle: "none", paddingLeft: 0 });
  const SNavLinkItem = css({ paddingRight: "2rem" });
  const SNavLinkText = css({ color: "black" });
  const SHeading = css({ color: "rebeccapurple" });

  return (
    <div css={SContainer}>
      <title>{pageTitle}</title>
      <nav>
        <ul css={SNavLinks}>
          <li css={SNavLinkItem}>
            <Link to="/" css={SNavLinkText}>
              Home
            </Link>
          </li>
          <li css={SNavLinkItem}>
            <Link to="/about" css={SNavLinkText}>
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

export default VerticalPageLayout;

export { VerticalPageLayout };
