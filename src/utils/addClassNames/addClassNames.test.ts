import {addClassNames} from './addClassNames';

describe('addClassNames', () => {
	test('with only first param', () => {
		expect(addClassNames('someClass')).toBe('someClass');
	});

	test('with additioanl class', () => {
		const expected = 'someClass class1 class2';
		expect(addClassNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
	});

	test('with additional class and mods', () => {
		const expected = 'someClass class1 class2 hovered scroll';
		expect(addClassNames('someClass', {hovered: true, scroll: true}, ['class1', 'class2'])).toBe(expected);
	});

	test('with additional class and mods 2', () => {
		const expected = 'someClass class1 class2 hovered';
		expect(addClassNames('someClass', {hovered: true, scroll: false}, ['class1', 'class2'])).toBe(expected);
	});
});