import * as React from "react";
import Link from "next/link";
import { spacing, colors } from "theme";

export default class MenuItem extends React.Component<{
  children: React.ReactNode;
  href?: string;
  onClick?: (event) => void;
  className?: string;
  target?: string;
  top?: boolean;
}> {
  render() {
    const { children, href, top, onClick, className } = this.props;

    return (
      <>
        <a href={href} onClick={onClick} className={className}>
          {children}
        </a>
        <style jsx>
          {`
            a {
              display: flex;
              align-items: center;
              padding: ${spacing.small} ${spacing.medium};
              color: rgba(0, 0, 0, 0.75);
              text-decoration: none;
              white-space: nowrap;
              border-radius: 4px;
              min-height: 40px;
              font-weight: 500;
              position: relative;
              user-select: none;
              overflow: hidden;
            }

            a.menu-with-icon {
              padding-right: 8px;
              position: relative;
              z-index: 3;
            }

            a.launch,
            a.highlighted,
            a:hover {
              background: ${top ? "rgba(0, 0, 0, 0.1)" : colors.primary};
              color: ${top ? colors.almostBlack : colors.white};
            }

            a.open,
            a.open:hover {
              background: none;
            }

            a.launch {
              width: 160px;
            }
          `}
        </style>
      </>
    );
  }
}
