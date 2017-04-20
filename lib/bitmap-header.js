const constants = require('../lib/bitmap-constants');

function BitmapHeader(buffer) {
  this.pixelOffset = buffer.readInt32LE(constants.PIXEL_OFFSET);
  this.bitsPerPixel = buffer.readInt16LE(constants.BITS_PER_PIXEL_OFFSET);
  this.fileSize = buffer.readUInt32LE(constants.FILE_SIZE_OFFSET);
}

module.exports = BitmapHeader;