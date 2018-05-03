// add by yanyj 20180503 start
// shared worker
// 通过SharedWorker 方法创建worker
var Worker = new SharedWorker('./shared-worker.js');

// 启动worker, sharedWorker的所有方法都挂载在其port属性下
Worker.port.start();

// 监听事件
Worker.port.onmessage = function (e) {
  console.log('shared worker [main]: [receive] ', e.data)
};

//发送message
Worker.port.postMessage('hello,i am main');



// add by yanyj 20180503 end
