import { notEmpty } from "edge-util";
import { MarkdownEmbed } from "edge-util";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
import { getTypeFromUrlOrPath } from "text-or-binary";
/**
 * find all embedded assets (`![](./img)`)
 */
export const findEmbeds = (markdownString: string): MarkdownEmbed[] => {
  const result = flattenMarkdownString(
    markdownString,
    (token) => token.type === "image",
  );

  const embeds: MarkdownEmbed[] = result
    .map((token) => {
      if (token.type !== "image") return;

      const markdownEmbed: MarkdownEmbed = {
        alt: token.text || "",
        src: token.href,
        type: getTypeFromUrlOrPath(token.href),
      };

      return markdownEmbed;
    })
    .filter(notEmpty);

  return embeds;
};
