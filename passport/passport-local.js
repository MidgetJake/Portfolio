'use strict';

const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
const pg = require('pg');
const client = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    client.query('SELECT id, username FROM user_collection WHERE id = $1', [parseInt(id, 10)], (err, results) => {
        if (err) {
            console.error('Error when selecting user on session deserialisation', err);
            return callback(err);
        }

        done(null, results.rows[0]);
    });
});

passport.use('local.login', new LocalStrategy({
    usernameField: 'username',
    passportField: 'password',
    passReqToCallback: true,
}, (req, username, password, done) => {
    client.query('SELECT id, username, password FROM user_collection WHERE LOWER(username)=$1', [username.toLowerCase()], (err, result) => {
        if (err) {
            console.error('Error when selecting user on login', err);
            return done(err);
        }

        if (result.rows.length > 0) {
            const first = result.rows[0];
            bcrypt.compare(password, first.password, function(err, res) {
                if (res) {
                    done(null, { id: first.id, username: first.username });
                } else {
                    done(null, false);
                }
            });
        } else {
            done(null, false);
        }
    });
}));

passport.use('local.register', new LocalStrategy({
    usernameField: 'username',
    passportField: 'password',
    passReqToCallback: true,
}, (req, username, password, done) => {
    client.query('SELECT username FROM user_collection WHERE LOWER(username)=$1', [username.toLowerCase()], (err, result) => {
        if (err) {
            console.error('Error on registration', err);
            return done(err);
        }

        if (result.rows.length > 0) {
            console.error('User already exists');
            return done(null, { success: false, type: 'username', error: 'Username is not available' });
        }

        password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
        client.query('INSERT INTO user_collection (username, password, email) VALUES ($1, $2, $3)', [username, password, ''], (err) => {
            if (err) {
                console.error('Error adding user to database: \n' + err);
                return done(null, { success: false, type: 'database', error: 'Something went wrong, please try again' });
            }

            return done(null, { success: true });
        });
    });
}));