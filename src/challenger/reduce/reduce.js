const reduce = (arr, func, initialValue) => {
    const acc = initialValue === undefined ? arr[0] : initialValue
    const arrCopy = initialValue === undefined ? arr.slice(1) : arr

    /* for (let i = 0; i < arrCopy.length; i++) {
        acc = func(acc, arrCopy[i], i, arrCopy)
    }

    return acc */
    return (function reduceInternal(accInternal, arrayInternal, counter) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ?
            accInternal :
            reduceInternal(func(accInternal, head, counter, arrCopy), tail, counter + 1)
    })(acc, arrCopy, 0)
}



export default reduce