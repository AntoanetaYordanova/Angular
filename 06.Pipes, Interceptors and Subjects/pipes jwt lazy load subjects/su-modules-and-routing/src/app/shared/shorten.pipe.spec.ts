import { ShortedPipe } from './shorten.pipe';

describe('ShortedPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortedPipe();
    expect(pipe).toBeTruthy();
  });
});
