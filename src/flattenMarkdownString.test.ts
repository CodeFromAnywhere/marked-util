import { stripMarkdownToChatMessage } from "./stripMarkdownToChatMessage.js";
const exampleMd = `# Hi

![](https://wow.com/image-asset-thingy)

\`\`\`
Hy codee
\`\`\`


Some more stuff

[](https://wow.com/link.png)

[](https://wow.com/link.html)

# DOEI

`;
console.log(stripMarkdownToChatMessage(exampleMd));
