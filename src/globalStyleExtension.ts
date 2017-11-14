import { StyleSheet } from 'aphrodite/no-important';

const selectorHandler = (selector: string, _: any, generateSubtreeStyles: any) => {
  if (selector[0] !== '*') {
    return null;
  }

  return generateSubtreeStyles(selector.slice(1));
};

export default (<any>StyleSheet).extend([{ selectorHandler }]);