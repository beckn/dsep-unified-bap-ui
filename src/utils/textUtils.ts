export const textUtils = {
  injectString(text: string, injectStrings: string[]): string {
    if (!text || !injectStrings || !injectStrings.length) {
      return text;
    }
    return injectStrings.reduce((result: string, injectString, index) => {
      result = result.replace(`{${index}}`, injectString);
      return result;
    }, text);
  },
};
