import * as React from "react";
import { getPost, getPosts } from "lib/posts";
import Markdown from "components/Markdown";
import Layout from "components/Layout";
import Metadata from "components/PostMetadata";

declare global {
  interface Window {
    Prism: any;
  }
}

export default function Changelog({ title, date, tag, content }) {
  React.useLayoutEffect(() => {
    // Rerun Prism syntax highlighting on the current page
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, []);
  return (
    <Layout title="Blog" pageTitle={`${title} – Blog`} back="/posts">
      <h1>{title}</h1>
      <Metadata tag={tag} date={date} />
      <Markdown children={content} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getPosts();
  const paths = posts.map((post) => `/posts/${post.slug}`);

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = getPost(
    context.params.slug.length > 1
      ? `${context.params.slug.join("-")}.markdown`
      : `${context.params.slug}.md`
  );

  return {
    props: {
      ...post,
    },
  };
}
