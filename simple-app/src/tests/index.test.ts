import {describe, expect, test,it} from '@jest/globals';
import {multiply, sum} from '../index';

describe("Calculation Tests", ()=>{


describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  }); 

  test('adds 100 + 20 to equal 120', () => {
    expect(sum(100, 20)).toBe(120);
  });
});



describe('Mutliply module', () => {
  it('mutliply 2 * 4 to equal 8', () => {
    const finalAnswer=multiply(2,4);
    expect(finalAnswer).toBe(8);
  })

  it('mutliply 0 * 4 to equal 0', () => {
    const finalAnswer=multiply(0,4);
    expect(finalAnswer).toBe(0);
  });
});

})