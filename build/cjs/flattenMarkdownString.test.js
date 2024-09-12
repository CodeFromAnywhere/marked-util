"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stripMarkdownToChatMessage_js_1 = require("./stripMarkdownToChatMessage.js");
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
console.log((0, stripMarkdownToChatMessage_js_1.stripMarkdownToChatMessage)(exampleMd));
//# sourceMappingURL=flattenMarkdownString.test.js.map