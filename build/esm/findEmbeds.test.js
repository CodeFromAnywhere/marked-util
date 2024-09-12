import { findEmbeds } from "./findEmbeds.js";
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
    const result = findEmbeds(string);
    console.log({ result });
};
findEmbedsTest();
//# sourceMappingURL=findEmbeds.test.js.map