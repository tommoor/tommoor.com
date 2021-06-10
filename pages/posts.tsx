import { map, groupBy } from "lodash";
import fs from "fs";
import Link from "next/link";
import { format } from "date-fns";
import { getPosts } from "lib/posts";
import Layout from "components/Layout";
import Metadata from "components/PostMetadata";
import { colors } from "theme";
import { generateRSS } from "lib/rss";

export default function Posts({ posts }) {
  const months = groupBy(posts, (post) =>
    format(new Date(post.date), "MMMM, yyyy")
  );
  const years = groupBy(months, (posts) =>
    format(new Date(posts[0].date), "yyyy")
  );

  const sortedYears = Object.keys(years).reverse();
  let previousYear;

  return (
    <Layout title="Blog">
      {posts.map((post) => {
        let heading;
        const year = format(new Date(post.date), "yyyy");

        if (year !== previousYear) {
          heading = <h1 className="year">{year}</h1>;
          previousYear = year;
        }

        return (
          <>
            {heading}
            <article key={post.slug}>
              <a id={format(new Date(post.date), "yyyy-MMMM")} />
              <a id={post.slug} />
              <h2>
                <Link href={`/posts/${post.slug}`}>
                  <a className="heading">{post.title}</a>
                </Link>
              </h2>
              <Metadata tag={post.tag} date={post.date} />
            </article>
          </>
        );
      })}
      <style jsx>
        {`
          .year {
            height: 0;
            margin: 0;
            font-size: 1.8em;
            color: ${colors.textTertiary};
            font-weight: 400;
            position: relative;
            top: 1.1em;
            left: -100px;
          }

          @media (max-width: 48em) {
            .year {
              color: ${colors.text};
              height: initial;
              margin: 1.2em 0 -0.6em;
              position: initial;
            }
          }

          .heading {
            color: ${colors.text};
          }

          .heading:hover {
            text-decoration: underline;
          }

          article {
            padding: 0;
            border-bottom: 0;
          }

          article h2 {
            font-size: 1.4em;
            line-height: 1.2;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  const rss = generateRSS(posts);

  fs.writeFileSync("./public/rss.xml", rss);

  return {
    props: {
      posts,
    },
  };
}
