// add by yanyj 20180503 start
// 主要脚本
var worker = new Worker('./worker.js');

// 添加监听message事件的监听器
worker.addEventListener('message', function (e) {
   // e.data
    console.log('监听到的信息：', e.data);
});

// 向worker发送信息
worker.postMessage('hello worker, i`m main.js');

// 关闭进程
worker.terminate();

// 监听错误事件
worker.addEventListener('error', function (e) {
    // event.filename: 导致错误的 Worker 脚本的名称；
    // event.message: 错误的信息；
    // event.lineno: 出现错误的行号；
    console.log('main:', '[error] ', e);
});


// add by yanyj 20180503 end
