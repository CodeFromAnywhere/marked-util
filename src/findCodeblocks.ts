import { notEmpty } from "edge-util";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
/**
 * find all codeblocks  (stuff between triple bracket)
 *
 * ```
 * here
 * is
 * example
 * ```
 *
 */
export const findCodeblocks = (markdownString: string): string[] => {
  const result = flattenMarkdownString(
    markdownString,
    (token) => token.type === "code",
  );

  const codesblocks: string[] = result
    .map((token) => {
      if (token.type !== "code") return;

      return token.text;
    })
    .filter(notEmpty);

  return codesblocks;
};
