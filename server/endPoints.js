const { index } = require('../index');

const endPoints = (router) => {
    router.get('/cur', cur_fib);
    router.get('/next', next_fib);
    router.post('/begin', begin);

    return router;
}

const cur_fib = async (req, res) => {
    let fibs = index.fib;
    res.json(fibs[fibs.length-3] + fibs[fibs.length-2] || 1);
}

const next_fib = async (req, res) => {
    let fibs = index.fib;
    let result = index.get_fib(fibs[fibs.length-1], fibs[fibs.length-2]);
    res.json(result);
}

const begin = async (req, res) => {
    index.set_fib([0, 1]);
    res.status(200);
}

module.exports = endPoints;