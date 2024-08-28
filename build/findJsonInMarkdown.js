import { tryParseJson } from "edge-util";
import { findCodeblocks } from "./findCodeblocks.js";
import { findCodespans } from "./findCodespans.js";
export const trimCodeblock = (codeblock) => {
    codeblock = codeblock.trim();
    const trimmedQuotes = codeblock.startsWith("`") && codeblock.endsWith("`")
        ? codeblock.slice(1, codeblock.length - 1)
        : codeblock;
    return trimmedQuotes;
};
/**
 * For good accuracy, try to get a markdown with a single JSON, preferably without any other codespans.
 */
export const findJsonInMarkdown = (text, 
/**
 * If true, tries to find the last one in the markdown, not the first
 */
isLast) => {
    if (!text)
        return;
    const trimmed = text.trim();
    const jsonFirstTry = tryParseJson(trimmed);
    if (jsonFirstTry) {
        return jsonFirstTry;
    }
    // find first codeblock (```code```)
    const codeblocks = findCodeblocks(trimmed);
    const index = isLast ? codeblocks.length - 1 : 0;
    const codeblock = codeblocks[index]
        ? trimCodeblock(codeblocks[index])
        : undefined;
    const secondTryJson = codeblock ? tryParseJson(codeblock) : undefined;
    if (secondTryJson) {
        return secondTryJson;
    }
    // if no codeblocks were found, find codespans
    const codespans = findCodespans(trimmed);
    const codespanIndex = isLast ? codespans.length - 1 : 0;
    const codespan = codespans[codespanIndex]?.trim().replaceAll("&quot;", '"');
    const thirdTryJson = tryParseJson(codespan);
    if (thirdTryJson) {
        return thirdTryJson;
    }
    const jsonRegex = /\{(?:[^{}]|(?:\{[^{}]*\}))*\}/;
    const matches = trimmed.match(jsonRegex);
    const regexIndex = isLast ? (matches?.length ? matches.length - 1 : 0) : 0;
    const match = matches?.[regexIndex];
    const fourthTryJson = match ? tryParseJson(match) : undefined;
    if (fourthTryJson) {
        return fourthTryJson;
    }
    return;
};
//# sourceMappingURL=findJsonInMarkdown.js.map