import { v4 as uuidv4 } from "uuid";
export function stArray(param) {
    const isArray = Array.isArray(param);
    if (isArray) {
        return param;
    }
    else {
        const paramTostring = param.replace('{', '').replace('}', '').replace("', '", ',');
        return paramTostring.split(',');
    }
}
export function convertCssClass(param) {
    return param.toLowerCase().replace(' ', '-');
}
export function sanitizeString(str) {
    return str?.toLowerCase().trim();
}
export const UUId = () => uuidv4();
export function getStoryArgTypes(argTypes, category, disabledKeys = [], basedOnArg = '') {
    return Object.keys(argTypes || {}).reduce((acc, key) => {
        acc[key] = {
            ...argTypes[key],
            table: { category, disable: disabledKeys.includes(key) },
            ...(basedOnArg ? { if: { arg: basedOnArg, value: true } } : {}),
        };
        return acc;
    }, {});
}
export function getValuesAsArrayFromObject(object) {
    return Object.values(object).flat();
}
export function resetIdsInTest(htmlFromTest) {
    return htmlFromTest?.outerHTML.replace(/id=".*?"/g, 'id=""').replace(/htmlfor=".*?"/g, 'htmlfor=""');
}
//# sourceMappingURL=utils.js.map
