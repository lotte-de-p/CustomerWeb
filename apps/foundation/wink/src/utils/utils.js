export function cleanUpHtmlToCopy(code) {
  const removeElAndTheContent = ['style'];
  removeElAndTheContent.forEach((pattern) => {
    if (code.includes(pattern)) {
      code = code.replace(new RegExp(`<${pattern}.*>[\\s\\S]*?<\\/${pattern}>`, 'g'), '');
    }
  });

  const removeElAndNotTheContent = ['data-hidden-div'];
  removeElAndNotTheContent.forEach((pattern) => {
    if (code.includes(pattern)) {
      code = code.replace(new RegExp(`<div[^>]*${pattern}[^>]*>|<\\/div>`, 'g'), '');
    }
  });

  const attributesToRemove = ['brand', 'style'];
  attributesToRemove.forEach((pattern) => {
    if (code.includes(pattern)) {
      code = code.replace(new RegExp(`\\s*${pattern}="[^"]*"`, 'g'), '');
    }
  });

  code = code.replace(/\bclass="([^"]*\bhydrated\b[^"]*)"/g, (match, rest) => {
    const newClass = rest.replace(/\bhydrated\b\s*/g, '').trim();
    return newClass ? `class="${newClass}"` : '';
  });

  return code;
}
