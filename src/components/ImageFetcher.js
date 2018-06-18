'use strict';

const request = require('request');

class ImageFetcher {
  static get(url) {
    return new Promise((resolve, reject) => {
      const requestSettings = {
        url,
        method: 'GET',
        encoding: null
      };

      request(requestSettings, (error, _response, body) => {
        error ? reject(error) : resolve(body);
      });
    });
  }
}

module.exports = ImageFetcher;
