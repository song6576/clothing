const event: any = {}

const bus = {
    $on(eventName: any, callback: any) {  //eventName就是事件名
        if (!event[eventName]) {  //用自定义事件建立一个数组
            event[eventName] = []
        }
        event[eventName].push(callback)
    },

    $emit(eventName: any, data: any) {
        if (!event[eventName]) return;
        event[eventName].forEach((cb: any) => {
            //用这个字符串，找到存储回到函数的数组，并依次执行数组里的回调函数
            cb(data);
        })
    },

    $off(eventName: string, callback: any) {
        if (!callback) {  //不传回调，把所有的这个事件对应的回调都清掉
            event[eventName] = null;
        }
        else {  //只清除这个事件，这个回调函数
            event[eventName] = event[eventName].filter((cb: any) => {
                return cb !== callback
            })
        }
    }
}

export default bus;

