const BitmapHeader = require('../lib/bitmap-header');

function BitmapTransformer(buffer) {

  this.transform = function(transformFn) {
    const header = new BitmapHeader(buffer);
    let currentOffset = header.pixelOffset;
    
    while(currentOffset < header.fileSize) {
      let obj = {
        r: buffer.readUInt8(currentOffset),
        g: buffer.readUInt8(currentOffset + 1), 
        b: buffer.readUInt8(currentOffset + 2)
      };
      const newColors = transformFn(obj);

      buffer.writeUInt8(newColors.r, currentOffset);
      buffer.writeUInt8(newColors.g, currentOffset + 1);
      buffer.writeUInt8(newColors.b, currentOffset + 2);
      
      currentOffset += (header.bitsPerPixel / 8);
    }

    this.buffer = buffer;
  };
}

module.exports = BitmapTransformer;