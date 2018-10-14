module.exports = function(fs, pg, path) {
    return {
        setupDB: async function() {
            // const pool = new pg.Pool(dbs.mainDB);
            const client = new pg.Pool({
                connectionString: process.env.DATABASE_URL,
            });
            const setupFiles = [];

            fs.readdirSync('./schemas').forEach(file => {
                setupFiles.push(fs.readFileSync(path.join('./schemas', file)).toString());
            });

            for (let i = 0; i < setupFiles.length; i++) {
                await client.query(setupFiles[i], []).then(() => {
                    console.log('File: #' + i + ' now initialised');
                }).catch((err) => {
                    console.error('File: #' + i + ' already initialised');
                    console.error('Error:' + err);
                });
            }
        },
    };
};