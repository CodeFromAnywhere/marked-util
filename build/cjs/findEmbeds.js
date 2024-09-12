"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmbeds = void 0;
const edge_util_1 = require("edge-util");
const flattenMarkdownString_js_1 = require("./flattenMarkdownString.js");
const text_or_binary_1 = require("text-or-binary");
/**
 * find all embedded assets (`![](./img)`)
 */
const findEmbeds = (markdownString) => {
    const result = (0, flattenMarkdownString_js_1.flattenMarkdownString)(markdownString, (token) => token.type === "image");
    const embeds = result
        .map((token) => {
        if (token.type !== "image")
            return;
        const markdownEmbed = {
            alt: token.text || "",
            src: token.href,
            type: (0, text_or_binary_1.getTypeFromUrlOrPath)(token.href),
        };
        return markdownEmbed;
    })
        .filter(edge_util_1.notEmpty);
    return embeds;
};
exports.findEmbeds = findEmbeds;
//# sourceMappingURL=findEmbeds.js.map