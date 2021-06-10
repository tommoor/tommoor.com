import { map, groupBy } from "lodash";
import fs from "fs";
import Link from "next/link";
import { format } from "date-fns";
import { getPosts } from "lib/posts";
import Layout from "components/Layout";
import Markdown from "components/Markdown";
import Metadata from "components/PostMetadata";
import { colors } from "theme";
import { generateRSS } from "lib/rss";

export default function Changelog({ posts }) {
  const months = groupBy(posts, (post) =>
    format(new Date(post.date), "MMMM, yyyy")
  );
  const years = groupBy(months, (posts) =>
    format(new Date(posts[0].date), "yyyy")
  );

  const sortedYears = Object.keys(years).reverse();

  return (
    <Layout title="Changelog" background="#F4F7FA">
      {posts.map((post, index) => (
        <article key={post.slug} className={index < 20 ? "" : "compact"}>
          <a id={format(new Date(post.date), "yyyy-MMMM")} />
          <a id={post.slug} />
          <h2>
            <Link href={`/changelog/${post.slug}`}>
              <a className="heading">{post.title}</a>
            </Link>
          </h2>
          <Metadata tag={post.tag} date={post.date} />
          {index < 20 && <Markdown source={post.content} />}
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
            padding: 4em 0;
            border-bottom: 1px solid ${colors.greyMid};
          }

          article:first-child {
            padding-top: 0;
          }

          article.compact {
            padding: 0;
            border-bottom: 0;
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
