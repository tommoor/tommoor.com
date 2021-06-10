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

  return (
    <Layout title="Blog">
      {posts.map((post) => (
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
      ))}
      <style jsx>
        {`
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

          article:first-child {
            padding-top: 0;
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
