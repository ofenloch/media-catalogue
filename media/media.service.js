var express = require('express');
var router = express.Router();

var db = require('../mysql/mysql.service');

/**
 * default limit for db queries
 */
var limit = 0;
/**
 * the routes' order is first come first serve
 */

/* GET media */
router.get("/", (req, res, next) => {
    let path = req.path;
    console.debug('media.service: GET / path is ' + path);
    let body = req.body;
    console.debug('media.service: GET / body is ' + body);
    let query = req.query;
    console.debug('media.service: GET / query is ' + query.toString());
    let params = req.params;
    console.debug('media.service: GET / params is ' + params);
    let name = '';

    console.debug('media.service: GET / no query, return list of all employees');
    // get list of all employees
        db.query('select * from mediacatalogue.files;', (err, data) => {
            if (!err) {
                res.status(200).json(data);
            } else {
                console.debug('media.service: error was ' + err);
                res.status(500).json('[{"error": "' + err + '"}]');
            }
        });

}); // router.get("/", (req, res, next) => {


module.exports = router;
