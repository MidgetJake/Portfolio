'use strict';

module.exports = function(pg) {
    return {
        setRouting: function(router) {
            router.get('/blog', this.indexPage);
            router.get('/api/latest/:count', this.getLatest);
            router.get('/api/post/:postid', this.getPost);
            router.get('/:postid', this.postPage);

            router.post('/api/create', this.createPost);
        },

        indexPage: function(req, res) {
            return res.render('blog/index.ejs', { title: 'Blog | Jake Barter' });
        },

        postPage: function(req, res) {
            return res.render('blog/post.ejs', { title: 'Blog | Jake Barter' });
        },

        getPost: function(req, res) {
            const client = new pg.Pool({
                connectionString: process.env.DATABASE_URL,
            });

            client.query('SELECT title, postdate, content, postID FROM posts WHERE LOWER(postID) = $1', [req.params.postid.toLowerCase()]).then(resp => {
                if (resp.rows.length < 1) {
                    client.end();
                    return res.json({ success: false, msg: 'Post does not exist' });
                }

                client.end();
                return res.json({ success: true, rows: resp.rows[0] });
            });
        },

        getLatest: function(req, res) {
            const client = new pg.Pool({
                connectionString: process.env.DATABASE_URL,
            });

            client.query('SELECT postID, title, postdate, content FROM posts LIMIT $1', [req.params.count]).then(resp => {
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

            let postID = req.body.title;
            postID.replace(' ', '-');
            postID.substring(0, 25);

            client.query('INSERT INTO posts (postID, title, postdate, content) VALUES ($1, $2, NOW(), $3)',
                [postID, req.body.title, req.body.content])
            .then(() => res.json({ success: true }))
            .catch(err => res.json({ success: false, msg: 'Something went wrong', error: err }));
        },
    };
};