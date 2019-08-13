'use strict';
let handle = null;

module.exports = function() {
    return {
        setRouting: function(router, appHandle) {
            handle = appHandle;
            router.get('*', this.indexPage);
        },

        indexPage: function(req, res) {
            return handle(req, res);
            // return res.render('landing/index.ejs', { title: 'Jake Barter', });
        },
    };
};
