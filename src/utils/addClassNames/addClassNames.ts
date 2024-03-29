type Mods = Record<string, boolean | string>;

export const addClassNames = (cls: string, mods: Mods = {}, additional: string[] = []) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([className, value]) => Boolean(value))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(([className, value]) => className),
  ].join(' ');
};
