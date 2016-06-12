exports.index = function(req, res) {
    res.render('index', {
        name: "SafeCode",
        title: "首页",
        list: [{
            id: 1000,
            title: "百度外卖"
        }, {
            id: 1001,
            title: "微信"
        }, {
            id: 1002,
            title: " Chrome 浏览器"
        }],
        curDetail: {
            id: 1002,
            title: " Chrome 浏览器",
            size: "100MB (why not eat shit?",
            version: "10.0(1235)",
            icon: "/public/image/chrome.png"
        }
    });
};