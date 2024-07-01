import { notEmpty } from "from-anywhere";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
/**
 * find all codespans (`code`)
 */
export const findCodespans = (markdownString) => {
    const result = flattenMarkdownString(markdownString, (token) => token.type === "codespan");
    const codespans = result
        .map((token) => {
        if (token.type !== "codespan")
            return;
        return token.text;
    })
        .filter(notEmpty);
    return codespans;
};
//# sourceMappingURL=findCodespans.js.map