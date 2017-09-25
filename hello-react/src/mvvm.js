function observe(data) {
    if (!data || typeof data !== 'object') {
        return
    }
    Object.keys(data).forEach((key) => {
        defineReactive(data, key, data[key])
    })
}

function defineReactive(data, key, val) {
    observe(val)
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get() {
            return val
        },
        set(newVal) {
            console.log('哈哈哈，监听到值得变化了', val, '--->', newVal)
            val = newVal
        }
    })
}