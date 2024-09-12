import { findCodeblocks } from "./findCodeblocks.js";
const test = () => {
    const test1 = findCodeblocks(`

Hello i am \`\`\`a coding machine\`\`\`

and you know it`);
    console.log({ test1 });
    const test2 = findCodeblocks(`
    
Hello i am 

\`\`\`
a coding machine
\`\`\`

and you know it`);
    console.log({ test2 });
};
test();
//# sourceMappingURL=findCodeblocks.test.js.map