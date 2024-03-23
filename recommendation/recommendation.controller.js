const express = require('express');
const router = express.Router();
const recommondationService = require('./recommendation.service');
// routes
router.get('/recommondsimiler', recommondsimiler);

module.exports = router;

//looking for recipes with relative ingredients
function recommondsimiler(req, res, next) {
   // console.log(req.body.id);
    recommondationService.recommondsimiler(req.body.id)
        .then(recipe => res.json(recipe))
        .catch(err => next(err));
}