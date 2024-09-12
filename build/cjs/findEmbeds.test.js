"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findEmbeds_js_1 = require("./findEmbeds.js");
const findEmbedsTest = () => {
    const string = `---
isCodestory: true
headerImage: ![](./ksks2.png)
---

# YO YO YO ![](./ksks.nl)

yo yo yo

![](./ksks.png)

**![](./wow.png)**
`;
    const result = (0, findEmbeds_js_1.findEmbeds)(string);
    console.log({ result });
};
findEmbedsTest();
//# sourceMappingURL=findEmbeds.test.js.map