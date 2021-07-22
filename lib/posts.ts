import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortBy } from "lodash";

export function getPost(fileName: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join(process.cwd(), "posts", fileName), "utf8").trim()
  );

  const title = data.title;
  const tag = data.tag || "";
  const date = new Date(data.date).toISOString();
  let slug = data.slug;

  // migrated old posts
  if (fileName.endsWith(".markdown")) {
    const postPath = path.basename(fileName, ".markdown");

    // cheap way to replace the first three dashes with slashes to match old
    // jekyll blog structure
    slug = postPath.replace("-", "/").replace("-", "/").replace("-", "/");
  }

  return { title, slug, date, tag, content };
}

export function getPosts() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "posts"));
  const posts = [];

  for (const fileName of fileNames) {
    if ([".DS_Store", "..", "."].includes(fileName)) {
      continue;
    }

    posts.push(getPost(fileName));
  }

  return sortBy(posts, (post) => post.date).reverse();
}
