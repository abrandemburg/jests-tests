import { expect } from 'chai'
import reverse from './reverse'



it('should be a function', () => {
    expect(reverse).to.be.a("function");
})

it('reverse([1] should return [1])', () => {
    expect(reverse([1])).to.be.deep.equal([1]);
})

it('reverse([1, 2] should return [2, 1])', () => {
    expect(reverse([1, 2])).to.be.deep.equal([2, 1]);
})

/* it('should be a function', () => {
    expect(every).to.be.a('function');
})

it('every([], (item) => item, should return true)', () => {
    expect(every([], (item) => item)).to.be.ok
})

it('every([0, 2, 3], (item) => item) should return false', () => {
    expect(every[0, 2, 3], (item) => item).to.not.be.ok;
})

it('every([1, 2, 3], (item) => item) should return true', () => {
    expect(every([1, 2, 3], (item) => item)).to.be.ok
})

it('every([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
    expect([1, 2, 3], (item, index) => index === item - 1).to.be.ok
})

it('every([1, 2, 3], (item, index, array) => array.length === 3) should return true', () => {
    expect([1, 2, 3], (item, index, array) => array.length === 3).to.be.ok
}) */