import { notEmpty } from "edge-util";
import { MarkdownLink } from "edge-util";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
import { getTypeFromUrlOrPath } from "text-or-binary";
/**
 * find all links
 */
export const findLinks = (markdownString: string): MarkdownLink[] => {
  const result = flattenMarkdownString(
    markdownString,
    (token) => token.type === "link",
  );

  const links: MarkdownLink[] = result
    .map((token) => {
      if (token.type !== "link") return;

      const markdownEmbed: MarkdownLink = {
        alt: token.text || "",
        href: token.href,
        type: getTypeFromUrlOrPath(token.href),
      };

      return markdownEmbed;
    })
    .filter(notEmpty);

  return links;
};
