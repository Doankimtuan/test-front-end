export const insertElementToArray = (array, element, index) => {
  if (index === undefined) return [...array, element];
  if (index === 0) return [element, ...array];
  return [...array.slice(0, index), element, ...array.slice(index)];
};

export const replaceElementWithIndexInArray = (array, index, newElement) => {
  if (index === 0) return [newElement, ...array.slice(1)];
  return [...array.slice(0, index), newElement, ...array.slice(index + 1)];
};

export const replaceElementInArray = (array, element, newElement) => {
  const index = array.indexOf(element);
  if (index === -1) return array;
  return replaceElementWithIndexInArray(array, index, newElement);
};

export const removeElementInArray = (array, element) => {
  const index = array.indexOf(element);
  if (index === -1) return array;
  return [...array.slice(0, index), ...array.slice(index + 1)];
};
