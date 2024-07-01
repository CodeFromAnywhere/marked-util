import * as marked from "marked";
import { notEmpty } from "from-anywhere";
import { flattenMarkedTokenRecursive } from "./flattenMarkedTokenRecursive.js";
/**
 * find all items that match a token, recursively in all nested things
 */
export const flattenMarkdownString = (
  markdownString: string,
  findFunction: (token: marked.marked.Token) => boolean,
): marked.marked.Token[] => {
  const tokenList = marked.marked.lexer(markdownString);
  const result = tokenList
    .map((x) => flattenMarkedTokenRecursive(x, findFunction))
    .filter(notEmpty)
    .flat();

  return result;
};
