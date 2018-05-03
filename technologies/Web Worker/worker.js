// add by yanyj 20180503 start
// worker 进程
console.log('WORKER TASK: ', 'running');

// 通过全局onmessage注册监听事件
onmessage = function (e) {

    console.log('worker.js:', 'receive', e.data);

    // 通过全局变量postMessage方法向worker发送信息
    postMessage('hello, i am worker.js')
};

// 也可通过addEventListener 方法注册监听事件
// addEventListener('message', function (e) {
//     console.log('worker.js:', 'receive', e.data);
//
//     // 通过全局变量postMessage方法向worker发送信息
//     postMessage('hello, i am worker.js')
// });


// add by yanyj 20180503 end
