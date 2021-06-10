import * as React from "react";
import Link from "next/link";
import { spacing, colors } from "theme";
import MenuItem from "./MenuItem";

export default function HeaderNavigation({ noHome }) {
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
        <li>
          <Link href="/rss.xml" passHref>
            <MenuItem>RSS</MenuItem>
          </Link>
        </li>
        <li>
          <MenuItem href="https://www.twitter.com/tommoor">Twitter</MenuItem>
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
            transition-duration: 0.5s;
            position: relative;
            margin: 0 0 0 ${spacing.medium};
          }

          li:hover {
            cursor: pointer;
          }

          ul li ul {
            visibility: hidden;
            opacity: 0;
            display: block;
            position: absolute;
            pointer-events: none;
            margin-top: 0;
            margin-left: ${spacing.medium};
            padding: 0 ${spacing.small} ${spacing.small};
            left: 0;
            background: rgba(255, 255, 255, 0.98);
            border-radius: 4px;
            min-width: 136px;
            z-index: 1;
          }

          @supports (
            (-webkit-backdrop-filter: blur(20px)) or
              (backdrop-filter: blur(20px))
          ) {
            ul li ul {
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(20px);
            }
          }

          ul li ul.sessions {
            min-width: 160px;
            max-width: 260px;
          }

          ul li ul.mobile {
            z-index: 2;
            width: 55vw;
            min-width: 0;
            left: auto;
            right: 0;
          }

          h3 {
            margin-left: ${spacing.medium};
            margin-bottom: 0.5em;
          }

          ul li ul a:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }

          ul li.open > ul,
          ul li:focus-within > ul,
          ul li ul:hover,
          ul li ul:focus {
            visibility: visible;
            opacity: 1;
            display: block;
            transition: opacity 200ms ease-in-out;
            pointer-events: initial;

            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
              0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08);
            padding-top: 42px;
            margin-top: -42px;
            margin-left: 0;
          }

          ul li ul li {
            clear: both;
            width: 100%;
            margin: 0;
          }

          li.hidden-on-desktop {
            display: none;
          }

          .auth {
            display: flex;
            align-items: center;
          }

          .or {
            padding: 0 4px;
          }

          @media (max-width: 48em) {
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
