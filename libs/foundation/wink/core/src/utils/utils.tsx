import { v4 as uuidv4 } from 'uuid';

export function stArray(param: any) {
  const isArray = Array.isArray(param);
  if (isArray) {
    return param;
  } else {
    const paramTostring = param.replace('{', '').replace('}', '').replace("', '", ',');
    return paramTostring.split(',');
  }
}

export function convertCssClass(param: string) {
  return param.toLowerCase().replace(' ', '-');
}

export function sanitizeString(str: string | undefined): string | undefined {
  return str?.toLowerCase().trim();
}

export const UUId = () => uuidv4();

export function getStoryArgTypes(
  argTypes: Record<string, any>,
  category: string,
  disabledKeys: string[] = [],
  basedOnArg: string = ''
): Record<string, any> {
  return Object.keys(argTypes || {}).reduce((acc, key) => {
    acc[key] = {
      ...argTypes[key],
      table: { category, disable: disabledKeys.includes(key) },
      ...(basedOnArg ? { if: { arg: basedOnArg, value: true } } : {}),
    };
    return acc;
  }, {});
}

export function getValuesAsArrayFromObject(object: { [key: string]: string[] }): string[] {
  return Object.values(object).flat();
}

export function resetIdsInTest(htmlFromTest: HTMLElement | undefined) {
  return htmlFromTest?.outerHTML.replace(/id=".*?"/g, 'id=""').replace(/htmlfor=".*?"/g, 'htmlfor=""');
}

export function cleanScopedWinkElements(htmlString: string, exclude: string[]): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  function preserveElement(element: HTMLElement): boolean {
    const tagName = element.tagName.toLowerCase();
    element.removeAttribute('class');
    element.removeAttribute('brand');
    element.removeAttribute('theme');

    if (exclude.includes(tagName)) {
      Array.from(element.childNodes).forEach((child) => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          preserveElement(child as HTMLElement);
        }
      });
      return true;
    }

    let hasExcludedChildren = false;
    Array.from(element.childNodes).forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE && preserveElement(child as HTMLElement)) {
        hasExcludedChildren = true;
      }
    });

    if (!hasExcludedChildren) {
      element.parentNode?.removeChild(element);
    }

    return hasExcludedChildren;
  }

  Array.from(doc.body.childNodes).forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      preserveElement(element);
    }
  });

  let parent: HTMLElement | null = null;

  exclude.forEach((tagName) => {
    const tags = doc.body.querySelectorAll(tagName);
    if (tags[0].parentNode !== doc.body) {
      const temp = Array.from(tags)
        .map((tag) => tag.outerHTML)
        .join('');
      if (parent !== null) {
        parent.innerHTML = temp;
      }
    } else {
      parent = tags[0] as HTMLElement;
    }
  });

  return doc.body.innerHTML;
}

export function zeroheightBaseStory() {
  return {
    tags: ['hidden'],
    parameters: {
      globals: { brand: 'base', theme: 'base-light' },
    },
  };
}
