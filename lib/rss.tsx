import ReactDOMServer from "react-dom/server";
import Markdown from "components/Markdown";

const domain = "https://www.tommoor.com";

const generateRSSItem = (post: any): string => `
  <item>
    <guid>${post.slug}</guid>
    <title>${post.title}</title>
    <link>${domain + "/posts/" + post.slug}</link>
    <description><![CDATA[ ${ReactDOMServer.renderToString(
      <Markdown source={post.content} />
    ).replace('src="/', 'src="' + domain + "/")} ]]></description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

export const generateRSS = (posts: any[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog by Tom Moor</title>
      <link>https://www.tommoor.com/posts</link>
      <description>Blog posts by Tom Moor</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://www.tommoor.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRSSItem).join("")}
    </channel>
  </rss>
`;
