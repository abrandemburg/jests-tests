const find = (arr, func) => {
    /* for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr))
            return arr[i]
    } */
    return (

        function internalFind(arrInternal, counter) {
            const [head, ...tail] = arrInternal

            return arr.length === 0 ?
                undefined :
                (func(head, counter, arr)) ?
                head :
                internalFind(tail, counter + 1)

        }

    )(arr, 0)
}

export default find