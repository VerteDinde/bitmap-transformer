const assert = require('assert');
const fs = require('fs');
const fsp = require('fs-promise');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transformer');

describe('bitmap file transformer', () => {

  let buffer = null;
  before(() => {
    // DONE: read './test/test-bitmap.bmp' into buffer variable
    // HINT: return a promise, this is async!
    return fsp.readFile('./test/test-bitmap.bmp')
      .then(data => {
        buffer = data;
      });
    // TODO: the functionality in this before is same as 
    // other test, can you remove (extract) the duplication?
  });

  // "pinning" test, or "snapshot" test
  it('test whole transform', () => {
    // use the BitmapTransformer class, 
    // passing in the buffer from the file read
    // HINT: use the Bitmap Header class in the constructor
    const bitmap = new BitmapTransformer(buffer);

    // call .transform(), which will modify the buffer.
    // in this api, you pass in a transformation function
    bitmap.transform(invert);

    // after above step, the buffer has been modified
    // and is accessible via bitmap.buffer

    // read the output file we saved earlier as
    // the "standard" expected output file
    const expectedBuffer = fs.readFileSync('./test/inverted-expected.bmp');
    assert.deepEqual(bitmap.buffer, expectedBuffer);

    // if you don't have a standard file yet, you could write it 
    // out by commenting above code, using code below and visually inspect
    // the file for correctness.
    // return fs.writeFileSync('./test/output.bmp', bitmap.buffer);
  });
});
