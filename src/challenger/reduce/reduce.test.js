import { expect } from 'chai'
import reduce from './reduce'

it('should be a function', () => {
    expect(reduce).to.be.a("function");
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
    expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6);
})

it('reduce([3, 4, 5], (acc, item) => acc + item, 0) should return 12', () => {
    expect(reduce([3, 4, 5], (acc, item) => acc + item, 0)).to.be.equal(12);
})

it('reduce([2, 3, 4], (acc, item) => acc + item) should return 9', () => {
    const before = reduce([2, 3, 4], (acc, item) => acc + item)
    const after = 9
    expect(before).to.be.equal(after)
})

it('reduce([1, 2], (acc, item, index) => acc + index, 0) should return 1', () => {
    const before = reduce([1, 2], (acc, item, index) => acc + index, 0)
    const after = 1
    expect(before).to.be.equal(after);
})

it('reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) should return 3', () => {
    const before = reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)
    const after = 3
    expect(before).to.be.equal(after);
})