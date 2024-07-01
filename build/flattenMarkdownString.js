import * as marked from "marked";
import { notEmpty } from "from-anywhere";
import { flattenMarkedTokenRecursive } from "./flattenMarkedTokenRecursive.js";
/**
 * find all items that match a token, recursively in all nested things
 */
export const flattenMarkdownString = (markdownString, findFunction) => {
    const tokenList = marked.marked.lexer(markdownString);
    const result = tokenList
        .map((x) => flattenMarkedTokenRecursive(x, findFunction))
        .filter(notEmpty)
        .flat();
    return result;
};
//# sourceMappingURL=flattenMarkdownString.js.map