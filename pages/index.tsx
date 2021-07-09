import * as React from "react";
import Layout from "components/Layout";
import { colors } from "theme";

export default function Home() {
  return (
    <Layout noHome>
      <main>
        <h1 className="title">
          Tom Moor is a founder and full-stack software engineer with a passion
          for product design and sweating the details.
        </h1>

        <p className="description">
          Currently I'm building a team knowledge base called{" "}
          <a href="https://www.getoutline.com?ref=tommoor" target="_blank">
            Outline
          </a>{" "}
          and contributing to{" "}
          <a href="https://github.com/tommoor" target="_blank">
            open source
          </a>
          . Recently I was principal engineer at{" "}
          <a href="https://www.abstract.com?ref=tommoor" target="_blank">
            Abstract
          </a>
          . Find me on{" "}
          <a href="https://www.twitter.com/tommoor" target="_blank">
            Twitter
          </a>{" "}
          or send a friendly <a href="mailto:tom.moor@gmail.com">Email</a>.
        </p>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 1.8rem;
          font-weight: 400;
        }

        .title,
        .description {
          text-align: left;
          width: 100%;s
        }

        .description {
          line-height: 1.5;
          font-size: 1.1rem;
          color: ${colors.textSecondary};
        }
      `}</style>
    </Layout>
  );
}
