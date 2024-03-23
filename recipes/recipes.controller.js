const express = require('express');
const router = express.Router();
const recipeService = require('./recipes.service');
var request = require('request-promise');
//routes
router.get('/getByName', getByName);
router.get('/getByIngredients', getByIngredients);

const data = null;
module.exports = router;


function getByName(req, res, next) {
    console.log(req.body.name);
    const options = {
        method: 'GET',
        uri: 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + req.body.name,
        body: req.body,
        json: true

    };
    console.log(options.uri);

    request(options).then(recipe => recipe ? res.json(recipe) : res.sendStatus(404))      
            .catch(err => next(err))             
}


function getByIngredients(req, res, next) {
    //console.log(req.body.name);
    const options = {
        method: 'GET',
        uri: 'https://www.themealdb.com/api/json/v2/1/filter.php?i=' + req.body.ing1 +','+ req.body.ing2 +','+ req.body.ing3 +','+ req.body.ing4,
        body: req.body,
        json: true

    };
    console.log(options.uri);

    request(options).then(recipe => recipe ? res.json(recipe) : res.sendStatus(404))      
            .catch(err => next(err))             
}