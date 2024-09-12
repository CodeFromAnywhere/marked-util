"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLinks = void 0;
const edge_util_1 = require("edge-util");
const flattenMarkdownString_js_1 = require("./flattenMarkdownString.js");
const text_or_binary_1 = require("text-or-binary");
/**
 * find all links
 */
const findLinks = (markdownString) => {
    const result = (0, flattenMarkdownString_js_1.flattenMarkdownString)(markdownString, (token) => token.type === "link");
    const links = result
        .map((token) => {
        if (token.type !== "link")
            return;
        const markdownEmbed = {
            alt: token.text || "",
            href: token.href,
            type: (0, text_or_binary_1.getTypeFromUrlOrPath)(token.href),
        };
        return markdownEmbed;
    })
        .filter(edge_util_1.notEmpty);
    return links;
};
exports.findLinks = findLinks;
//# sourceMappingURL=findLinks.js.map