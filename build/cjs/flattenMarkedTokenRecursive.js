"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenMarkedTokenRecursive = void 0;
/**
 * Recursively flatten a marked token and return something if a find function is met
 */
const flattenMarkedTokenRecursive = (token, findFunction) => {
    if (findFunction(token)) {
        return [token];
    }
    if (token.type === "table") {
        const header = token.header
            .map((token) => {
            const result = token.tokens
                .map((x) => (0, exports.flattenMarkedTokenRecursive)(x, findFunction))
                .flat();
            return result;
        })
            .flat();
        const rows = token.rows
            .map((row) => {
            const result = row
                .map((token) => {
                const result = token.tokens
                    .map((x) => (0, exports.flattenMarkedTokenRecursive)(x, findFunction))
                    .flat();
                return result;
            })
                .flat();
            return result;
        })
            .flat();
        return [header, rows].flat();
    }
    if (token.type === "list") {
        const result = token.items
            .map((token) => {
            const result = token.tokens
                .map((x) => (0, exports.flattenMarkedTokenRecursive)(x, findFunction))
                .flat();
            return result;
        })
            .flat();
        return result;
    }
    if (token.type === "del" ||
        token.type === "em" ||
        token.type === "heading" ||
        token.type === "link" ||
        token.type === "paragraph" ||
        token.type === "strong") {
        const result = token.tokens
            .map((x) => (0, exports.flattenMarkedTokenRecursive)(x, findFunction))
            .flat();
        return result;
    }
    return [];
};
exports.flattenMarkedTokenRecursive = flattenMarkedTokenRecursive;
//# sourceMappingURL=flattenMarkedTokenRecursive.js.map