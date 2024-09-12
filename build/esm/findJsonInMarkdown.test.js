import { findJsonInMarkdown } from "./findJsonInMarkdown.js";
const test = () => {
    const result1 = findJsonInMarkdown('\n    \n`{"name": "Grolloerstraat"}`');
    const result2 = findJsonInMarkdown('\n\n`{"name":"screen-recording-1672931879041-no-transcription"}`');
    const result3 = findJsonInMarkdown(' Here is an example:\n    \n    `{"name":"auto_waiting"}`\n');
    const result4 = findJsonInMarkdown('\n    \nAnswer: {"name": "just-hello"}');
    console.log({ result1, result2, result3, result4 });
};
test();
//# sourceMappingURL=findJsonInMarkdown.test.js.map