'use strict';

module.exports = function(pg, passport, User) {
    return {
        setRouting: function(router) {
            router.get('/api/latest/:count', this.getLatest);
            router.get('/api/post/:postid', this.getPost);
            router.get('/api/featured', this.getFeatured);
            // router.get('/blog/:postid', this.postPage);
            router.get('/admin', this.adminPage);
            router.get('*', this.indexPage);

            router.post('/api/create', User.isJake, this.createPost);
            router.post('/login', this.adminLogin);

            // no attempting to make an account gotta keep it to just me for now
            // router.post('/register', this.adminRegister);
        },

        indexPage: function(req, res) {
            console.log(req.headers.host);
            return res.render('blog/index.ejs', { title: 'Blog | Jake Barter' });
        },

        adminPage: function(req, res) {
            if (!req.isAuthenticated()) {
                return res.render('blog/adminlogin.ejs', { title: 'Admin Login | Jake Barter' });
            } else {
                return res.render('blog/admin.ejs', { title: 'Admin | Jake Barter' });
            }
        },

        adminLogin: function(req, res) {
            passport.authenticate('local.login', (err, user, info) => {
                if (err) return res.json({ success: false, error: 'Something went wrong, please try again' });
                if (!user) return res.json({ success: false, error: 'Incorrect username or password' });
                req.logIn(user, (err) => {
                    if (err) return console.log('ERROR: ' + err);
                    res.json({ success: true, user: user });
                });
            })(req, res);
        },

        adminRegister: function(req, res) {
            passport.authenticate('local.register', (err, info) => {
                if (err) return res.json({ success: false, error: 'Something went wrong, please try again' });
                if (!info.success) return res.json({ success: false, error: info.error, type: info.type });
                return res.json({ success: true, msg: 'Account created!' });
            })(req, res);
        },

        getPost: function(req, res) {
            const client = new pg.Pool({
                connectionString: process.env.DATABASE_URL,
            });

            client.query('SELECT title, postdate, content, postID, description FROM posts WHERE LOWER(postID) = $1', [req.params.postid.toLowerCase()]).then(resp => {
                if (resp.rows.length < 1) {
                    client.end();
                    return res.json({ success: false, msg: 'Post does not exist' });
                }

                client.end();
                return res.json({ success: true, rows: resp.rows[0] });
            });
        },

        getFeatured: function(req, res) {
            const client = new pg.Pool({
                connectionString: process.env.DATABASE_URL,
            });

            client.query('SELECT postID, title, postdate, content, description FROM posts WHERE featured=True ORDER BY postdate DESC').then(resp => {
                if (resp.rows.count < 1) {
                    client.end();
                    return res.json({ success: false, msg: 'There are no posts' });
                }

                client.end();
                return res.json({ success: true, rows: resp.rows });
            });
        },

        getLatest: function(req, res) {
            const client = new pg.Pool({
                connectionString: process.env.DATABASE_URL,
            });

            client.query('SELECT postID, title, postdate, content, description FROM posts ORDER BY postdate DESC LIMIT $1', [req.params.count]).then(resp => {
                if (resp.rows.count < 1) {
                    client.end();
                    return res.json({ success: false, msg: 'There are no posts' });
                }

                client.end();
                return res.json({ success: true, rows: resp.rows });
            });
        },

        createPost: function(req, res) {
            const client = new pg.Pool({
                connectionString: process.env.DATABASE_URL,
            });

            let postID = req.body.title.split(' ');
            const idList = [];
            let currLen = 0;

            // This just generates the readable url that we can use for the blog
            // Making sure it's not a jumble of numbers
            while (true) {
                if (idList.length >= postID.length) break;
                if (postID[idList.length] === undefined) break;
                if (postID[idList.length].length + currLen < 31) {
                    postID[idList.length] = postID[idList.length].replace(/\W/g, '');
                    currLen += postID[idList.length].length + 1;
                    idList.push(postID[idList.length].toLowerCase());
                } else {
                    break;
                }
            }

            postID = idList.join('-');

            const tmpTags = [];
            for (let tag of req.body.tags) {
                tmpTags.push('"' + tag + '"');
            }

            const tags = '{' + tmpTags.join(',') + '}';

            client.query('INSERT INTO posts (postID, title, postdate, content, description, tags) VALUES ($1, $2, NOW(), $3, $4, $5)',
                [postID, req.body.title, req.body.content, req.body.description, tags]
            ).then(() => {
                client.end();
                res.json({ success: true });
            }).catch(err => {
                client.end();
                res.json({ success: false, msg: 'Something went wrong', error: err });
            });
        },
    };
};