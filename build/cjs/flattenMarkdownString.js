"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenMarkdownString = void 0;
const marked_1 = require("marked");
const edge_util_1 = require("edge-util");
const flattenMarkedTokenRecursive_js_1 = require("./flattenMarkedTokenRecursive.js");
/**
 * find all items that match a token, recursively in all nested things
 */
const flattenMarkdownString = (markdownString, findFunction) => {
    const tokenList = marked_1.marked.lexer(markdownString);
    const result = tokenList
        .map((x) => (0, flattenMarkedTokenRecursive_js_1.flattenMarkedTokenRecursive)(x, findFunction))
        .filter(edge_util_1.notEmpty)
        .flat();
    return result;
};
exports.flattenMarkdownString = flattenMarkdownString;
//# sourceMappingURL=flattenMarkdownString.js.map