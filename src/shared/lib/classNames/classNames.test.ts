import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with additional class and mods', () => {
    const expected = 'someClass class1 class2 hovered focused';
    expect(classNames('someClass', {
      hovered: true,
      focused: true,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('with false mods', () => {
    const expected = 'someClass class1 class2 hovered focused';
    expect(classNames('someClass', {
      hovered: true,
      scrollable: false,
      focused: true,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('with false and undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', {
      hovered: true,
      scrollable: false,
      focused: undefined,
    }, ['class1', 'class2'])).toBe(expected);
  });
});
