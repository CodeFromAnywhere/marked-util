import { notEmpty } from "from-anywhere";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
import { getTypeFromUrlOrPath } from "text-or-binary";
/**
 * find all embedded assets (`![](./img)`)
 */
export const findEmbeds = (markdownString) => {
    const result = flattenMarkdownString(markdownString, (token) => token.type === "image");
    const embeds = result
        .map((token) => {
        if (token.type !== "image")
            return;
        const markdownEmbed = {
            alt: token.text || "",
            src: token.href,
            type: getTypeFromUrlOrPath(token.href),
        };
        return markdownEmbed;
    })
        .filter(notEmpty);
    return embeds;
};
//# sourceMappingURL=findEmbeds.js.map