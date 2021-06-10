import * as React from "react";
import Link from "next/link";
import { spacing } from "theme";
import MenuItem from "./MenuItem";

export default function Navigation({ noHome }) {
  const ref = React.useRef();

  return (
    <nav role="navigation" ref={ref}>
      <ul>
        {noHome ? null : (
          <li>
            <Link href="/" passHref>
              <MenuItem>About</MenuItem>
            </Link>
          </li>
        )}
        <li>
          <Link href="/posts" passHref>
            <MenuItem>Blog</MenuItem>
          </Link>
        </li>
        <li className="hidden-on-mobile">
          <Link href="/rss.xml" passHref>
            <MenuItem>RSS</MenuItem>
          </Link>
        </li>
        <li>
          <MenuItem href="https://www.twitter.com/tommoor" target="_blank">
            Twitter
          </MenuItem>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: flex-end;
          }

          ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          li {
            display: block;
            position: relative;
            margin: 0 0 0 ${spacing.medium};
          }

          li:hover {
            cursor: pointer;
          }

          li.hidden-on-desktop {
            display: none;
          }

          @media (max-width: 48em) {
            li {
              margin: 0 0 0 ${spacing.small};
            }
            li.hidden-on-desktop {
              display: block;
            }
            li.hidden-on-mobile {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
