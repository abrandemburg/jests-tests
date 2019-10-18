/* const every = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], index, arr)) {
            return false
        }
    }
    return true
} */
/* 
export default every */

/* const every = (arr, func) => {
    return (
        function internalEvery(arrayInternal, counter) {
            const [head, ...tail] = arrayInternal

            return arrayInternal.length === 0 ?
                true : !func(head, counter, arr) ?
                false : internalEvery(tail, counter + 1)
        }
    )(arr, 0)
}

export default every */
/* 
const reverse = (arr) => {
    let newArr = []
    for (let i = arr.length; i--;) {
        newArr.push(arr[i])
    }

    return newArr
}

export default reverse */

const reverse = (arr) => {
    return arr.length === 0 ? [] : [
        arr.slice(-1)[0],
        ...reverse(arr.slice(0, -1))
    ]
}

export default reverse