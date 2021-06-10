import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { colors } from "theme";

export default function Markdown(props) {
  return (
    <div className="md">
      <ReactMarkdown {...props} rehypePlugins={[rehypeRaw]} />
      <style jsx>
        {`
          .md {
            font-size: 1.1em;
            line-height: 1.4;
            color: ${colors.text};
          }

          .md :global(blockquote) {
            margin-left: 0;
            margin-right: 0;
            background-color: #f2f2f2;
            border-left: 6px solid #f2f2f2;
            padding: 15px 30px 15px 15px;
            font-style: italic;
            font-size: 16px;
          }

          .md :global(a: hover) {
            text-decoration: underline;
          }

          .md :global(blockquote p) {
            margin: 0;
          }

          .md :global(img) {
            display: block;
            max-width: 100%;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            margin: 2em auto;
          }

          .md :global(img[title="@2x"]) {
            zoom: 50%;
          }

          .md :global(code) {
            font-size: 15px;
            background: #f2f2f2;
            padding: 2px 4px;
            border-radius: 2px;
          }

          .md :global(li) {
            line-height: 1.6;
          }

          .md :global(h3) {
            margin-top: 1.5em;
          }
        `}
      </style>
    </div>
  );
}
