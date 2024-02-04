import { classNames } from './classNames';

describe('className', () => {
  test('has the first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('has additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('has truthy mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', {
      hovered: true,
      scrollable: true,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('has falsy mods', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', {
      hovered: true,
      scrollable: false,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('has undefined mods', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {
      hovered: undefined,
      scrollable: false,
    }, ['class1', 'class2'])).toBe(expected);
  });
});
