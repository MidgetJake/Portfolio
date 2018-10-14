module.exports = function(subdomain, subrouter) {
    if (!subdomain || typeof subdomain !== 'string') {
        throw new Error('The first parameter must be a string representing the subdomain');
    }

    if (!subrouter || typeof subrouter !== 'function' || subrouter.length < 3) {
        throw new Error('The second parameter must be a function that handles fn(req, res, next) params.');
    }

    return function (req, res, next) {
        const depth = req.subdomains.length || 0;
        if (depth === 0) return next();

        let match = true;
        const subdomainSplit = subdomain.split('.');

        for (let level in subdomainSplit) {
            const expected = subdomainSplit[level];
            const actual = req.subdomains[req.subdomains.length - (level + 1)];

            if (expected === '*') { continue; }

            if (actual !== expected) {
                match = false;
                break;
            }
        }

        if (match) {
            return subrouter(req, res, next);
        }

        next();
    };

};