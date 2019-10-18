import { expect } from 'chai'
import filter from './filter'

it ('should return a function', () => {
    expect(filter).to.be.a('function');
})

it ('filter([1, 2], (item) => item) should return [1, 2]', () => {
    expect(filter([1, 2], (item) => item)).to.be.deep.equal([1, 2]);
})

it ('filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
    expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2]);
})

it ('filter([0, 1, 3, 4, 5], (item) => item < 3) should return [0, 1]', () => {
    expect(filter([0, 1, 3, 4, 5], (item) => item < 3)).to.be.deep.equal([0, 1]);
})

