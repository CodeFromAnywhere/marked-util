"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCodespans = void 0;
const edge_util_1 = require("edge-util");
const flattenMarkdownString_js_1 = require("./flattenMarkdownString.js");
/**
 * find all codespans (`code`)
 */
const findCodespans = (markdownString) => {
    const result = (0, flattenMarkdownString_js_1.flattenMarkdownString)(markdownString, (token) => token.type === "codespan");
    const codespans = result
        .map((token) => {
        if (token.type !== "codespan")
            return;
        return token.text;
    })
        .filter(edge_util_1.notEmpty);
    return codespans;
};
exports.findCodespans = findCodespans;
//# sourceMappingURL=findCodespans.js.map