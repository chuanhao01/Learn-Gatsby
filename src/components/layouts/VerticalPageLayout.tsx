/** @jsx jsx */
import { Link, graphql, useStaticQuery } from "gatsby";
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
  const STitleHeader = css({
    fontSize: "3rem",
    color: "gray",
    fontWeight: 700,
    margin: "3rem 0",
  });
  const SNavLinks = css({ display: "flex", listStyle: "none", paddingLeft: 0 });
  const SNavLinkItem = css({ paddingRight: "2rem" });
  const SNavLinkText = css({ color: "black" });
  const SHeading = css({ color: "rebeccapurple" });

  const query = graphql`
    query VerticalPageLayout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;
  const data = useStaticQuery<Queries.VerticalPageLayoutQuery>(query);
  const title = data.site?.siteMetadata.title;

  return (
    <div css={SContainer}>
      <title>
        {title} | {pageTitle}
      </title>
      <header css={STitleHeader}>{title}</header>
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
          <li css={SNavLinkItem}>
            <Link to="/blogs" css={SNavLinkText}>
              Blogs
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
