"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findCodeblocks_js_1 = require("./findCodeblocks.js");
const test = () => {
    const test1 = (0, findCodeblocks_js_1.findCodeblocks)(`

Hello i am \`\`\`a coding machine\`\`\`

and you know it`);
    console.log({ test1 });
    const test2 = (0, findCodeblocks_js_1.findCodeblocks)(`
    
Hello i am 

\`\`\`
a coding machine
\`\`\`

and you know it`);
    console.log({ test2 });
};
test();
//# sourceMappingURL=findCodeblocks.test.js.map