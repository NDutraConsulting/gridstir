export const removeWhiteSpace = (str: string): string => {
  return str.replace(/(\r\n|\n|\r| |\t)/gm, '');
};
