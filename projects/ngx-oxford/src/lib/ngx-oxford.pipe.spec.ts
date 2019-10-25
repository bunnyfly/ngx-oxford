import { NgxOxfordPipe } from './ngx-oxford.pipe';

let pipe;

describe('NgxOxfordPipe', () => {
  beforeEach(() => {
    pipe = new NgxOxfordPipe();
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
    expect(() => pipe.transform(undefined, 'and')).toThrowError(/pipe content is not array/);
    expect(() => pipe.transform(null, 'and')).toThrowError(/pipe content is not array/);
    expect(() => pipe.transform(NaN, 'and')).toThrowError(/pipe content is not array/);
    expect(() => pipe.transform(0, 'and')).toThrowError(/pipe content is not array/);
    expect(() => pipe.transform(1, 'and')).toThrowError(/pipe content is not array/);
    expect(() => pipe.transform('foo', 'and')).toThrowError(/pipe content is not array/);
    expect(() => pipe.transform({ foo: 'bar' }, 'and')).toThrowError(/pipe content is not array/);
  });

  it('should fail without a conjunction', () => {
    expect(() => pipe.transform(['foo'], 'and')).not.toThrow();
    expect(() => pipe.transform(['foo'])).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], '')).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], true)).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], null)).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], 0)).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], 1)).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], NaN)).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], undefined)).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], { foo: 'bar' })).toThrowError(/pipe argument conjunction/);
    expect(() => pipe.transform(['foo'], ['foo'])).toThrowError(/pipe argument conjunction/);
  });
});
