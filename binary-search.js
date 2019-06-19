export const isContain = (arr, number) => {
    const sortedArr = [...arr].sort((a, b) => a - b)

    const binarySearch = arr => {
        const middleIndex = Math.floor(arr.length - arr.length / 2)
        const middleValue = arr[middleIndex]
        if (arr.length === 1 || number === middleValue) {
            return number === middleValue
        }
        return number < middleValue ?
            binarySearch(arr.slice(0, middleIndex)) :
            binarySearch(arr.slice(middleIndex))
    }
    return binarySearch(sortedArr)
}
