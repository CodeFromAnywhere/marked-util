import { marked } from "marked";
import { notEmpty } from "edge-util";
import { flattenMarkedTokenRecursive } from "./flattenMarkedTokenRecursive.js";
/**
 * find all items that match a token, recursively in all nested things
 */
export const flattenMarkdownString = (markdownString, findFunction) => {
    const tokenList = marked.lexer(markdownString);
    const result = tokenList
        .map((x) => flattenMarkedTokenRecursive(x, findFunction))
        .filter(notEmpty)
        .flat();
    return result;
};
//# sourceMappingURL=flattenMarkdownString.js.map