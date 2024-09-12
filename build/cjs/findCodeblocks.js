"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCodeblocks = void 0;
const edge_util_1 = require("edge-util");
const flattenMarkdownString_js_1 = require("./flattenMarkdownString.js");
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
const findCodeblocks = (markdownString) => {
    const result = (0, flattenMarkdownString_js_1.flattenMarkdownString)(markdownString, (token) => token.type === "code");
    const codesblocks = result
        .map((token) => {
        if (token.type !== "code")
            return;
        return token.text;
    })
        .filter(edge_util_1.notEmpty);
    return codesblocks;
};
exports.findCodeblocks = findCodeblocks;
//# sourceMappingURL=findCodeblocks.js.map