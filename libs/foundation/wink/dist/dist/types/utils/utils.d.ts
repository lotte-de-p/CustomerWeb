export declare function stArray(param: any): any;
export declare function convertCssClass(param: string): string;
export declare function sanitizeString(str: string | undefined): string | undefined;
export declare const UUId: () => string;
export declare function getStoryArgTypes(argTypes: Record<string, any>, category: string, disabledKeys?: string[], basedOnArg?: string): Record<string, any>;
export declare function getValuesAsArrayFromObject(object: {
    [key: string]: string[];
}): string[];
export declare function resetIdsInTest(htmlFromTest: HTMLElement | undefined): string | undefined;
