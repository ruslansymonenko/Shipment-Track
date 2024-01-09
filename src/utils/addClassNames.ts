type Mods = Record<string, boolean | string>

export const addClassNames = (cls: string, mods: Mods = {}, additional: string[] = []) => {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className, value]) => className)
	].join(' ');
};