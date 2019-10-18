/* const filter = (arr, func) => {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i])
        }

    }
    return newArr
}

export default filter */

const filter = (arr, func) => {
    return (function filterInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal

        return arrInternal.length === 0 ?
            [] :
            (func(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter + 1))
    })(arr, 0)
}

export default filter