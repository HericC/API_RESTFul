const con = require('../database/connection');
const generateAccessJWT = require('../helpers/generateAccessJWT');

module.exports.token = (req, res) => {
    const userExemple = {
        'id': 1,
        'name': 'my name',
        'last_name': 'my last name'
    }

    const token = generateAccessJWT(userExemple.id);
    const auth = { 'auth': true, 'token': token };
    return res.json(auth);
}

module.exports.select = (req, res) => {
    con.query('select * from test;', (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}

module.exports.insert = (req, res) => {
    const errors = [];

    if (!req.body.name) errors.push('name not defined');
    if (!req.body.last_name) errors.push('last_name not defined');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`insert into test (name, last_name) values ("${req.body.name}", "${req.body.last_name}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}
