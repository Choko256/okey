module.exports = {
    arrandom(arr) {
        let ln = arr.length
        if (ln === 0) {
            return null
        }
        let idx = Math.floor(Math.random() * ln)
        return arr[idx]
    }
}