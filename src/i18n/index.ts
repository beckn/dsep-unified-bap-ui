import {KeyValue} from '@interfaces/commonInterfaces';
import {textUtils} from '@utilz/textUtils';

const en = require('./en.json');

function getLanguageSource(): KeyValue {
  return en;
}

export const getString = (
  key: string,
  replaceArray?: (string | number)[],
): string => {
  let value = getLanguageSource()[key];
  if (value) {
    if (replaceArray) {
      value = textUtils.injectString(
        value,
        replaceArray.map(replace => String(replace)),
      );
    }
    return value;
  } else {
    if (__DEV__) {
      // if value haven't add in @i18n/en.json, pls add it.
      console.warn(`cannot find [${key}], pls add it in @i18n/en.json`);
    }
    return key;
  }
};
