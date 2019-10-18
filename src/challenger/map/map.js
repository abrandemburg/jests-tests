/* const map = ( arr, func ) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++ ) {
        newArr.push(func(arr[i], i, arr))
    }
    return newArr
}

export default map */

/* const map = ( arr, func ) => {

    let newArr = []
    const [head, ...tail] = arr

    map(tail, )

    return map()

} */
/* 
const map = (arr = [], func = (item) => item) => {
    let counter = 0
    const mapInternal = (arrayInternal) => {
        if(arrayInternal.length === 0) {
            return []
        }

        const [head, ...tail] = arrayInternal
        return [func(head, counter++, arr)].concat(mapInternal(tail, func))
    }

    return mapInternal(arr)
}

export default map */

const map = (arr = [], func = (item) => item) => {
    return (function mapInternal(arrayInternal, counter) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? [] : [
            func(head, counter, arr),
            ...mapInternal(tail, counter + 1)
        ]
    })(arr, 0)
}

export default map