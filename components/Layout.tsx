import ReactGA from "react-ga";
import Link from "next/link";
import * as React from "react";
import Head from "next/head";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import MenuItem from "components/MenuItem";
import { spacing, colors, palette, typography } from "theme";

ReactGA.initialize("UA-1703053-5");

const domain = "https://www.tommoor.com";
const defaultDescription =
  "Tom Moor is a founder and full-stack software engineer with a passion for product design and sweating the details.";
const defaultImage = `${domain}/images/og-image.png`;

type Props = {
  title?: string;
  pageTitle?: string;
  description?: string;
  image?: string;
  background?: string;
  color?: string;
  header?: React.ReactNode;
  hero?: React.ReactNode;
  back?: string;
  children: React.ReactNode;
  noHome?: boolean;
};

export default function Layout({
  title,
  pageTitle,
  description = defaultDescription,
  image = defaultImage,
  header,
  hero,
  background = "transparent",
  color = "inherit",
  back,
  noHome,
  children,
}: Props) {
  React.useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);

  const siteTitle = "Tom Moor";
  const resolvedTitle = pageTitle || title;
  const fullTitle = `${resolvedTitle ? resolvedTitle + " – " : ""}${siteTitle}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/base-min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/grids-min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/rss.xml"
        />
        <link rel="me" href="https://subculture.chat/@tom" title="Mastodon" />
        {/* Keys are required so that next/head doesn't dedupe these two by name */}
        <meta
          key="theme-color-light"
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content={palette.light.background}
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content={palette.dark.background}
        />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="origin" />
        <meta name="site_name" property="og:site_name" content="Tom Moor" />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="title"
          property="og:title"
          content={resolvedTitle || siteTitle}
        />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta name="image" property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tommoor" />
        <meta name="twitter:domain" content="tommoor.com" />
        <meta name="twitter:title" content={resolvedTitle || siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.css"
          rel="stylesheet"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css"
          rel="stylesheet"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>

      <header className={(header || hero) && "with-header"}>
        <div className="container">
          <div className="pure-g">
            <div className="pure-u-1-2 header-left">
              <div className="back-link">
                {back && (
                  <Link href={back} passHref>
                    <MenuItem>
                      <span className="back">↩</span>&nbsp;Back
                    </MenuItem>
                  </Link>
                )}
              </div>
            </div>
            <div className="pure-u-1-2 header-right">
              <Navigation noHome={noHome} />
            </div>
          </div>
        </div>
      </header>
      <div className="page">
        <div className="content">{children}</div>
      </div>
      <Footer />
      <style jsx>
        {`
          header {
            color: ${color};
            background: ${background};
          }

          .back {
            position: relative;
            top: 2px;
          }

          .header-left,
          .header-right {
            display: flex;
            padding: ${spacing.large} 0;
          }

          .header-right {
            justify-content: flex-end;
          }

          .with-header {
            padding-bottom: 1em;
            margin-bottom: 2em;
          }

          .page {
            min-height: calc(100vh - 300px);
            max-width: 700px;
            margin: 0 auto;
          }

          .content {
            padding: 0 ${spacing.large} ${spacing.xlarge};
          }

          @media (max-width: 48em) {
            .content {
              padding: 0 ${spacing.medium};
            }
            .back-link {
              display: none;
            }
          }
        `}
      </style>
      <style global jsx>
        {`
          :root {
            color-scheme: light dark;
            --primary: ${palette.light.primary};
            --background: ${palette.light.background};
            --background-secondary: ${palette.light.backgroundSecondary};
            --border: ${palette.light.border};
            --text: ${palette.light.text};
            --text-secondary: ${palette.light.textSecondary};
            --text-tertiary: ${palette.light.textTertiary};
            --text-menu: ${palette.light.textMenu};
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --primary: ${palette.dark.primary};
              --background: ${palette.dark.background};
              --background-secondary: ${palette.dark.backgroundSecondary};
              --border: ${palette.dark.border};
              --text: ${palette.dark.text};
              --text-secondary: ${palette.dark.textSecondary};
              --text-tertiary: ${palette.dark.textTertiary};
              --text-menu: ${palette.dark.textMenu};
            }
          }

          .container {
            max-width: 1140px;
            width: 90vw;
            margin: 0 auto;
          }

          * {
            box-sizing: border-box;
          }

          html,
          button,
          input,
          select,
          textarea,
          .pure-g [class*="pure-u"] {
            color: ${colors.text};
            font-family: ${typography.fontFamily};
          }

          html,
          body {
            padding: 0;
            margin: 0;
            line-height: 1.6;
            background: ${colors.background};
          }

          h1 {
            font-size: 2em;
          }
          h2 {
            font-size: 1.2em;
            margin-top: 1.4em;
          }

          h1,
          h2,
          h3,
          h4,
          .pure-g h1[class*="pure-u"],
          .pure-g h2[class*="pure-u"],
          .pure-g h3[class*="pure-u"],
          .pure-g h4[class*="pure-u"] {
            font-family: "HK Grotesk";
            font-weight: 600;
            line-height: 1;
          }

          a {
            color: ${colors.primary};
            text-decoration: none;
          }

          p {
            line-height: 1.4;
          }

          @font-face {
            font-family: "HK Grotesk";
            src: url("/fonts/HKGrotesk-Light.eot") format("eot"),
              url("/fonts/HKGrotesk-Light.woff2") format("woff2"),
              url("/fonts/HKGrotesk-Light.woff") format("woff");
            font-weight: 300;
            font-style: normal;
          }

          @font-face {
            font-family: "HK Grotesk";
            src: url("/fonts/HKGrotesk-Regular.eot") format("eot"),
              url("/fonts/HKGrotesk-Regular.woff2") format("woff2"),
              url("/fonts/HKGrotesk-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
          }

          @font-face {
            font-family: "HK Grotesk";
            src: url("/fonts/HKGrotesk-Bold.eot") format("eot"),
              url("/fonts/HKGrotesk-Bold.woff2") format("woff2"),
              url("/fonts/HKGrotesk-Bold.woff") format("woff");
            font-weight: 600;
            font-style: normal;
          }
        `}
      </style>
    </>
  );
}
