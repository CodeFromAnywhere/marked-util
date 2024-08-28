import { getExtension } from "edge-util";
import * as marked from "marked";
import { getTypeFromUrlOrPath } from "text-or-binary";
import { flattenMarkdownString } from "./flattenMarkdownString.js";
/**
 * Function needed for parsing AI Result into something that can be understood by chat systems like whatsapp, messenger, sms, etc.
 */
export const stripMarkdownToChatMessage = (markdown: string) => {
  const codeblocks = flattenMarkdownString(
    markdown,
    (token) => token.type === "code",
  );

  const images = flattenMarkdownString(
    markdown,
    (token) => token.type === "image",
  );

  const links = flattenMarkdownString(
    markdown,
    (token) => token.type === "link",
  );

  const augmentedLinks = links.map((link) => {
    const href = (link as marked.marked.Tokens.Link).href;
    const ext = getExtension(href);
    const type = getTypeFromUrlOrPath(href);
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
    const link = current as marked.marked.Tokens.Link;

    return previous.replace(
      link.raw,
      `${link.href}${link.text !== "" ? ` (${link.text})` : ""}`,
    );
  }, strippedMarkdown);

  const assetUrls = [
    assetLinks.map((x) => (x as marked.marked.Tokens.Link).href),
    images.map((x) => (x as marked.marked.Tokens.Image).href),
  ].flat();

  return { chatMessage: regularLinksReplaced, assetUrls };
};
