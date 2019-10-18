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

/* const some = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr))
            return true
    }

    return false
} */

const some = (arr, func) => {
    return (
        function internalSome(internalArray, counter) {
            const [head, ...tail] = internalArray

            return internalArray.length === 0 ?
                false :
                func(head, counter, arr) ?
                true :
                internalSome(tail, counter + 1)
        }
    )(arr, 0)
}

export default some