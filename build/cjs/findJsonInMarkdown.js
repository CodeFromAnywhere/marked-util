"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findJsonInMarkdown = exports.trimCodeblock = void 0;
const edge_util_1 = require("edge-util");
const findCodeblocks_js_1 = require("./findCodeblocks.js");
const findCodespans_js_1 = require("./findCodespans.js");
const trimCodeblock = (codeblock) => {
    codeblock = codeblock.trim();
    const trimmedQuotes = codeblock.startsWith("`") && codeblock.endsWith("`")
        ? codeblock.slice(1, codeblock.length - 1)
        : codeblock;
    return trimmedQuotes;
};
exports.trimCodeblock = trimCodeblock;
/**
 * For good accuracy, try to get a markdown with a single JSON, preferably without any other codespans.
 */
const findJsonInMarkdown = (text, 
/**
 * If true, tries to find the last one in the markdown, not the first
 */
isLast) => {
    var _a;
    if (!text)
        return;
    const trimmed = text.trim();
    const jsonFirstTry = (0, edge_util_1.tryParseJson)(trimmed);
    if (jsonFirstTry) {
        return jsonFirstTry;
    }
    // find first codeblock (```code```)
    const codeblocks = (0, findCodeblocks_js_1.findCodeblocks)(trimmed);
    const index = isLast ? codeblocks.length - 1 : 0;
    const codeblock = codeblocks[index]
        ? (0, exports.trimCodeblock)(codeblocks[index])
        : undefined;
    const secondTryJson = codeblock ? (0, edge_util_1.tryParseJson)(codeblock) : undefined;
    if (secondTryJson) {
        return secondTryJson;
    }
    // if no codeblocks were found, find codespans
    const codespans = (0, findCodespans_js_1.findCodespans)(trimmed);
    const codespanIndex = isLast ? codespans.length - 1 : 0;
    const codespan = (_a = codespans[codespanIndex]) === null || _a === void 0 ? void 0 : _a.trim().replaceAll("&quot;", '"');
    const thirdTryJson = (0, edge_util_1.tryParseJson)(codespan);
    if (thirdTryJson) {
        return thirdTryJson;
    }
    const jsonRegex = /\{(?:[^{}]|(?:\{[^{}]*\}))*\}/;
    const matches = trimmed.match(jsonRegex);
    const regexIndex = isLast ? ((matches === null || matches === void 0 ? void 0 : matches.length) ? matches.length - 1 : 0) : 0;
    const match = matches === null || matches === void 0 ? void 0 : matches[regexIndex];
    const fourthTryJson = match ? (0, edge_util_1.tryParseJson)(match) : undefined;
    if (fourthTryJson) {
        return fourthTryJson;
    }
    return;
};
exports.findJsonInMarkdown = findJsonInMarkdown;
//# sourceMappingURL=findJsonInMarkdown.js.map