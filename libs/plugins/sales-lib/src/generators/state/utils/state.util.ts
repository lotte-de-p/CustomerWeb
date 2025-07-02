import ts from 'typescript';
import { Tree } from '@nx/devkit';

export function parseInterface(
  filePath: string,
  interfaceName: string = 'DeliveryState'
): ts.InterfaceDeclaration | undefined {
  const program = ts.createProgram([filePath], {});
  const sourceFile = program.getSourceFile(filePath);

  if (!sourceFile) return undefined;

  return sourceFile.forEachChild((node) => {
    if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
      return node;
    }
  });
}

export function extractProperties(interfaceDecl: ts.InterfaceDeclaration): Record<
  string,
  {
    type: string;
    isArray: boolean;
  }
> {
  const properties: Record<string, { type: string; isArray: boolean }> = {};

  interfaceDecl.members.forEach((member) => {
    if (ts.isPropertySignature(member) && member.name && ts.isIdentifier(member.name) && member.type) {
      const propertyName = member.name.text;
      let propertyType = 'unknown'; // Default type
      const isArray = ts.isArrayTypeNode(member.type);

      try {
        if (isArray && member.type.elementType && ts.isIdentifier(member.type.elementType)) {
          propertyType = member.type.elementType.text;
        } else if (!isArray && ts.isIdentifier(member.type)) {
          console.log(member.type);
          propertyType = member.type.text;
        }
      } catch (error) {
        console.warn(`Could not extract type for property ${propertyName}:`, error);
      }

      properties[propertyName] = { type: propertyType, isArray };
    }
  });

  return properties;
}

export function generateActionsAndDefaultStateCode(
  properties: Record<
    string,
    {
      type: string;
      isArray: boolean;
    }
  >,
  stateName: string
): { actionsCode: string; defaultStateCode: string } {
  let actionsCode = 'import { createAction, props } from "@ngrx/store";\n\n';
  let defaultStateCode = `export const defaultState: ${capitalize(stateName)}State = {\n`;

  Object.entries(properties).forEach(([propertyName, { type, isArray }]) => {
    const actionName = `set${capitalize(propertyName)}`;
    const propertyAction = `export const ${actionName} = createAction('[${stateName}] set ${propertyName.toLowerCase()}', props<{ ${propertyName}: ${type}${isArray ? '[]' : ''} }>());\n`;
    actionsCode += propertyAction;
    defaultStateCode += `  ${propertyName}: ${isArray ? '[]' : 'undefined'},\n`;
  });

  defaultStateCode += '};\n';
  return { actionsCode, defaultStateCode };
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function replaceDefaultStateInFile(tree: Tree, filePath: string, defaultStateCode: string) {
  if (!tree.exists(filePath)) {
    console.warn(`File ${filePath} does not exist.`);
    return;
  }

  const content = tree.read(filePath, 'utf-8');
  const defaultStateRegex = /export\s+const\s+defaultState\s*:\s*\w+\s*=\s*\{[\s\S]*?\}\s*;/;

  if (content && content.match(defaultStateRegex)) {
    const updatedContent = content.replace(defaultStateRegex, defaultStateCode);
    tree.write(filePath, updatedContent);
  } else {
    console.log('No match found for defaultState replacement.'); // Indicate no match was found
  }
}
