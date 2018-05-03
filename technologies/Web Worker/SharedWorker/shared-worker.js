// add by yanyj 20180503 start
// worker 进程脚本
// 提供全局属性onConnect来访问Worker
onConnect = function (e) {
    // 通过posts（实例化进程后）来访问已经建立的脚本进程
    var port =  e.ports[0];

    // 监听
    port.addEventListener('message', function (e) {
        console.log('sub1:' + e.data)
    });

    port.start();
};

// add by yanyj 20180503 end
