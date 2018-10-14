const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const validator = require('express-validator');
const session = require('express-session');
const passport = require('passport');
const dependencies = require('./dependencies');
const path = require('path');
const http = require('http');
const subdomain = require('express-subdomain');
const expressRouter = require('express-promise-router');

dependencies.resolve(function(main, blog, database) {
    if (process.env.SYSENV !== 'PROD') {
        process.env.DATABASE_URL = 'postgres://postgres:TestPassword@localhost:5432/portfolio';
        /*process.env.EncryptKey = require('./secret').encrpyt;*/
    }

    SetupExpress();

    function SetupExpress() {
        const app = express();

        configureExpress(app);
        const server = http.createServer(app);

        // Setup Router/Routing
        const router = expressRouter();
        main.setRouting(router);

        const blogRouter = expressRouter();
        blog.setRouting(blogRouter);
        app.use(subdomain('blog', blogRouter));

        app.use(router);

        database.setupDB();

        app.listen(80, function(...args) {
            console.log('Listening on port 80');
        });
    }

    function configureExpress(app) {
        require('./passport/passport-local');

        app.use(express.static('client/public'));
        app.use(cookieParser());
        app.set('views', path.join(__dirname, '/client/public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(validator());
        app.use(session({
            secret: 'supersecretkey',
            resave: true,
            saveInitializes: true,
            saveUninitialized: true,
            /*cookie: {secure: true},*/
        }));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());
    }

});