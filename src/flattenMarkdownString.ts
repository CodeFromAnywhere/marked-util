import { marked } from "marked";
import { notEmpty } from "edge-util";
import { flattenMarkedTokenRecursive } from "./flattenMarkedTokenRecursive.js";
/**
 * find all items that match a token, recursively in all nested things
 */
export const flattenMarkdownString = (
  markdownString: string,
  findFunction: (token: marked.Token) => boolean,
): marked.Token[] => {
  const tokenList = marked.lexer(markdownString);
  const result = tokenList
    .map((x) => flattenMarkedTokenRecursive(x, findFunction))
    .filter(notEmpty)
    .flat();

  return result;
};
