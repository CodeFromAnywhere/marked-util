import { notEmpty } from "from-anywhere";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
import { getTypeFromUrlOrPath } from "text-or-binary";
/**
 * find all links
 */
export const findLinks = (markdownString) => {
    const result = flattenMarkdownString(markdownString, (token) => token.type === "link");
    const links = result
        .map((token) => {
        if (token.type !== "link")
            return;
        const markdownEmbed = {
            alt: token.text || "",
            href: token.href,
            type: getTypeFromUrlOrPath(token.href),
        };
        return markdownEmbed;
    })
        .filter(notEmpty);
    return links;
};
//# sourceMappingURL=findLinks.js.map