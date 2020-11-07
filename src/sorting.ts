export const simpleSorting = (a: unknown, b: unknown): number => {
  if (a === b) {
    return 0;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }

  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a ? -1 : 1;
  }

  return !a ? 1 : !b ? -1 : 0;
};