import { OxfordPipe } from './oxford.pipe';

let pipe: OxfordPipe;

describe('OxfordPipe', () => {
  beforeEach(() => {
    pipe = new OxfordPipe();
  });

  it('should work with lists of 0 items', () => {
    expect(pipe.transform([], 'and')).toBe('');
  });

  it('should work with lists of 1 item', () => {
    expect(pipe.transform(['foo'], 'and')).toBe('foo');
  });

  it('should work with lists of 2 item', () => {
    expect(pipe.transform(['foo', 'bar'], 'and')).toBe('foo and bar');
  });

  it('should work with lists of 3 item', () => {
    expect(pipe.transform(['foo', 'bar', 'baz'], 'and')).toBe('foo, bar, and baz');
  });

  it('should work with lists of 4 item', () => {
    expect(pipe.transform(['foo', 'bar', 'baz', 'boom'], 'and')).toBe('foo, bar, baz, and boom');
  });

  it('should trim all whitespace', () => {
    expect(pipe.transform(['  foo ', ' \tbar  ', ' baz \t '], '  and  \t')).toBe(
      'foo, bar, and baz',
    );
  });

  it('should work with inner whitespace or punctuation', () => {
    expect(pipe.transform(['foo bar', 'apple-orange'], 'and/or')).toBe(
      'foo bar and/or apple-orange',
    );
  });

  it('should fail for non-lists', () => {
    expect(() => pipe.transform(undefined, 'and')).toThrowError(/is not an array/);
    expect(() => pipe.transform(null, 'and')).toThrowError(/is not an array/);
  });

  it('should fail without a conjunction', () => {
    expect(() => pipe.transform(['foo'], 'and')).not.toThrow();
    expect(() => pipe.transform(['foo'])).not.toThrowError(/is not a word/);
    expect(() => pipe.transform(['foo'], '')).toThrowError(/is not a word/);
    expect(() => pipe.transform(['foo'], null)).toThrowError(/is not a word/);
  });

  it('should truncate a list with specific conjunction', () => {
    expect(pipe.transform(['orange', 'apple', 'mango', 'banana', 'pineapple'], 'and', {trail: 'etc', maxWords: 3}))
          .toBe('orange, apple, mango, etc');
  });

  it('should proceed as usual if truncate word count is larger that the array length', () => {
    expect(
      pipe.transform(
        ['orange', 'apple', 'mango', 'banana', 'pineapple'],
        'and',
        {trail: 'etc', maxWords: 12}
      )
    ).toBe('orange, apple, mango, banana, and pineapple');
  });
});
