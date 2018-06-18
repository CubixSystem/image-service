'use strict';

const router = require('express').Router();
const validate = require('validate.js');
const ImageFetcher = require('components/ImageFetcher');
const ImageProcessor = require('components/ImageProcessor');

router.get('/img', async function(req, res, next) {
  try {
    validateQueryParams(req.query);

    const imageBuffer = await ImageFetcher.get(req.query.href);
    const processedImage = await ImageProcessor.cropAndScale(
      imageBuffer,
      normalizeParams(req.query)
    );

    res.attachment('image.png');
    res.send(processedImage);
  } catch (err) {
    next(err);
  }
});

function validateQueryParams(params) {
  const numericalRule = {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true,
      strict: true
    }
  };
  const constraints = {
    href: { url: true },
    x: numericalRule,
    y: numericalRule,
    w: numericalRule,
    h: numericalRule,
    s: numericalRule
  };

  const result = validate(params, constraints);
  if (result) {
    throw new Error(JSON.stringify(result));
  }
}

function normalizeParams(params) {
  return {
    left: parseInt(params.x, 10),
    top: parseInt(params.y, 10),
    width: parseInt(params.w, 10),
    height: parseInt(params.h, 10),
    scale: parseInt(params.s, 10)
  };
}

module.exports = router;
