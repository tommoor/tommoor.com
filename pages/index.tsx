import * as React from "react";
import Link from "next/link";
import {
  PadlockIcon,
  CollectionIcon,
  BuildingBlocksIcon,
  LightBulbIcon,
  GlobeIcon,
  StarredIcon,
  EyeIcon,
} from "outline-icons";
import Layout from "components/Layout";
import { spacing, colors, typography } from "theme";

const isBrowser = typeof document !== "undefined";
let isHydrating = true;

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 className="title">
          Tom Moor is a full-stack software engineer with a passion for product
          design and the little details.
        </h1>

        <p className="description">
          Making designers lives a little easier at Abstract. I'm also often
          found in coffee shops building an open source team wiki called
          Outline, previously I co-founded Sqwiggle and Buffer.
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
          font-size: 4rem;
          font-weight: 600;
        }

        .subtitle {
          text-align: center;
          margin: 100px 0 -16px;
          line-height: 1.15;
          font-weight: 600;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          max-width: 900px;
          color: ${colors.textSecondary};
        }
      `}</style>
    </Layout>
  );
}
