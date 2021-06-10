import * as React from "react";
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
              padding: ${spacing.small} 0;
              margin: 0 ${spacing.medium};
              color: rgba(0, 0, 0, 0.75);
              text-decoration: none;
              white-space: nowrap;
              min-height: 40px;
              border-bottom: 2px solid transparent;
              font-weight: 500;
              position: relative;
              user-select: none;
              overflow: hidden;
              transition: all 100ms ease-in-out;
            }

            a:hover {
              border-bottom: 2px solid ${colors.primary};
              color: ${colors.primary};
            }
          `}
        </style>
      </>
    );
  }
}
