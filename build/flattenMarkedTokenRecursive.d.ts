import * as marked from "marked";
/**
 * Recursively flatten a marked token and return something if a find function is met
 */
export declare const flattenMarkedTokenRecursive: (token: marked.marked.Token, findFunction: (token: marked.marked.Token) => boolean) => marked.marked.Token[];
//# sourceMappingURL=flattenMarkedTokenRecursive.d.ts.map