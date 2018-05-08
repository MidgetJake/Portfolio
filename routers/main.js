'use strict';

module.exports = function() {
    return {
        setRouting: function(router) {
            router.get('/', this.indexPage);
        },

        indexPage: function(req, res) {
            if (!req.isAuthenticated()) {
                const errors = req.flash('error');
                return res.render('index.ejs', { title: 'Jake Barter', isLoggedIn: false, hasErrors: errors.length > 0, messages: errors });
            } else {
                return res.render('index.ejs', { title: 'Jake Barter', isLoggedIn: true, user: req.user });
            }
        },
    };
};