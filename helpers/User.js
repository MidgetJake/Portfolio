'use strict';

module.exports = function() {
    return {
        RegisterValidation: (req, res, next) => {
            req.checkBody('username', 'Username is required').notEmpty();
            req.checkBody('username', 'Username must be atleast 3 characters long').isLength({ min: 3 });

            // req.checkBody('email', 'Email is required').notEmpty();
            // req.checkBody('email', 'A Valid email is required').isEmail();

            req.checkBody('password', 'Password is required').notEmpty();
            req.checkBody('password', 'Password must be atleast 6 characters long').isLength({ min: 6 });
            req.checkBody('password', 'Password confirmation must match').matches(req.body.passwordconfirm);

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array();
                    const messages = [];
                    errors.forEach((error) => {
                        messages.push(error.msg);
                    });
                    if (message.length > 0) {
                        res.json({ success: false, error: messages });
                    } else {
                        return next();
                    }
                })
                .catch((err) => next());
        },

        LoginValidation: (req, res, next) => {

            req.checkBody('username', 'Input your username').notEmpty();
            req.checkBody('password', 'Input your password').notEmpty();

            req.getValidationResult()
                .then((result) => {
                    const errors = result.array();
                    const messages = [];
                    errors.forEach((error) => {
                        messages.push(error.msg);
                    });
                    if (message.length > 0) {
                        res.json({ success: false, msg: messages });
                    } else {
                        return next();
                    }
                })
                .catch((err) => next());
        },

        isAuthenticated: (req, res, next) => {
            if (req.user) {
                if (req.user.username.length > 0) return next();
                res.redirect('/');
            } else {
                res.json({
                    success: false,
                    msg: 'Not logged in',
                });
            }
        },

        isJake: (req, res, next) => {
            // Since I will be the only one with an account at first, this is fine for now atleast
            if (!req.isAuthenticated()) return res.json({ success: false, msg: 'Unauthorised' });
            return next();
        },
    };
};