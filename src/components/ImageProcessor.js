'use strict';

const sharp = require('sharp');

class ImageProcessor {
  static async cropAndScale(imageBuffer, { left, top, width, height, scale }) {
    return sharp(imageBuffer)
      .extract({ left, top, width, height })
      .resize(width * scale)
      .png()
      .toBuffer();
  }
}

module.exports = ImageProcessor;
