import { notEmpty } from "from-anywhere";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
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
export const findCodeblocks = (markdownString) => {
    const result = flattenMarkdownString(markdownString, (token) => token.type === "code");
    const codesblocks = result
        .map((token) => {
        if (token.type !== "code")
            return;
        return token.text;
    })
        .filter(notEmpty);
    return codesblocks;
};
//# sourceMappingURL=findCodeblocks.js.map