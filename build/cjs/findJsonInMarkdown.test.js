"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findJsonInMarkdown_js_1 = require("./findJsonInMarkdown.js");
const test = () => {
    const result1 = (0, findJsonInMarkdown_js_1.findJsonInMarkdown)('\n    \n`{"name": "Grolloerstraat"}`');
    const result2 = (0, findJsonInMarkdown_js_1.findJsonInMarkdown)('\n\n`{"name":"screen-recording-1672931879041-no-transcription"}`');
    const result3 = (0, findJsonInMarkdown_js_1.findJsonInMarkdown)(' Here is an example:\n    \n    `{"name":"auto_waiting"}`\n');
    const result4 = (0, findJsonInMarkdown_js_1.findJsonInMarkdown)('\n    \nAnswer: {"name": "just-hello"}');
    console.log({ result1, result2, result3, result4 });
};
test();
//# sourceMappingURL=findJsonInMarkdown.test.js.map