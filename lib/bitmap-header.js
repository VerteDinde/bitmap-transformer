function BitmapHeader(buffer) {
  this.pixelOffset = buffer.readInt32LE(10, 4);
  this.bitsPerPixel = buffer.readInt32LE(28);
  this.fileSize = buffer.readInt32LE(34);
}

module.exports = BitmapHeader;