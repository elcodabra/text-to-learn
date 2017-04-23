import { RandomPipe } from './random.pipe';

describe('RandomPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomPipe();
    expect(pipe).toBeTruthy();
  });
});
