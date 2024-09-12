"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripMarkdownToChatMessage = void 0;
const edge_util_1 = require("edge-util");
const text_or_binary_1 = require("text-or-binary");
const flattenMarkdownString_js_1 = require("./flattenMarkdownString.js");
/**
 * Function needed for parsing AI Result into something that can be understood by chat systems like whatsapp, messenger, sms, etc.
 */
const stripMarkdownToChatMessage = (markdown) => {
    const codeblocks = (0, flattenMarkdownString_js_1.flattenMarkdownString)(markdown, (token) => token.type === "code");
    const images = (0, flattenMarkdownString_js_1.flattenMarkdownString)(markdown, (token) => token.type === "image");
    const links = (0, flattenMarkdownString_js_1.flattenMarkdownString)(markdown, (token) => token.type === "link");
    const augmentedLinks = links.map((link) => {
        const href = link.href;
        const ext = (0, edge_util_1.getExtension)(href);
        const type = (0, text_or_binary_1.getTypeFromUrlOrPath)(href);
        const isProbablyNoAsset = type === "other" || type === "text";
        return { isProbablyNoAsset, link };
    });
    const assetLinks = augmentedLinks
        .filter((x) => !x.isProbablyNoAsset)
        .map((x) => x.link);
    const regularLinks = augmentedLinks
        .filter((x) => x.isProbablyNoAsset)
        .map((x) => x.link);
    const rawStrippables = [
        codeblocks.map((x) => x.raw),
        images.map((x) => x.raw),
        assetLinks.map((x) => x.raw),
    ].flat();
    const strippedMarkdown = rawStrippables.reduce((previous, current) => {
        return previous.replace(current, "");
    }, markdown);
    const regularLinksReplaced = regularLinks.reduce((previous, current) => {
        const link = current;
        return previous.replace(link.raw, `${link.href}${link.text !== "" ? ` (${link.text})` : ""}`);
    }, strippedMarkdown);
    const assetUrls = [
        assetLinks.map((x) => x.href),
        images.map((x) => x.href),
    ].flat();
    return { chatMessage: regularLinksReplaced, assetUrls };
};
exports.stripMarkdownToChatMessage = stripMarkdownToChatMessage;
//# sourceMappingURL=stripMarkdownToChatMessage.js.map