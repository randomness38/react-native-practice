import expect from 'expect';
import {store} from './store';

describe('store', () => {

  it('should initialize', () => {
    const actual = store.getState();
    const expected = {
      actual,
    };
    expect(actual).toEqual(expected);
  });
});
