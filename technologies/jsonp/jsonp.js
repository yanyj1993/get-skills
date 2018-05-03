// add by yanyj 20180503 start
// jsonp的个人实现
let http = require('http');
let url = require('url');

let jsonpData = {a:1};

http.createServer(function (req, res) {
    let params = url.parse(req.url, true);
    if(params.query.callback) {
        let resStr = `${params.query.callback}(${JSON.stringify(jsonpData)})`;
        res.end(resStr);
    }
    res.end();
}).listen(8088, function () {
   console.log('jsonp 服务建立成功')
});

// add by yanyj 20180503 end