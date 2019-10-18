import { expect } from 'chai'
import map from './map'

it('sould be a function', () => {
    expect(map).to.be.a('function')
})

it('should return [1, 2]', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
})

it('should return [3, 4]', () => {
    expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
})

it('map([1, 2], (item) => item + 1) should return [2, 3]', () => {
    expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3]);
})

it('map([1, 2], (item, index) => index ) should return [0, 1]', () => {
    expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
})

it('map([1, 2], (item, index, array) => array ) should return [[1, 2], [1, 2]]', () => {
    expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([
        [1, 2],
        [1, 2]
    ]);
})

it('map(1) should throw a TypeError', () => {
    let error

    try {
        map(1)
    } catch (e) {
        error = e
    }

    expect(error.message).to.be.equal('First parameter Type Error')
})

it('map([1, 2], "string") should throw a TypeError', () => {
    let error

    try {
        map([1, 2], "string")
    } catch (e) {
        error = e
    }

    expect(error.message).to.be.equal('Second parameter Type Error')
})