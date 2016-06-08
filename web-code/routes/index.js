exports.index = function(req, res) {
    res.render('index', {
        name: "SafeCode",
        title: "首页"
    });
};