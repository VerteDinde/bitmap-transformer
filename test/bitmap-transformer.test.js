const assert = require('assert');
const fs = require('fs');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transform');

describe('bitmap file transformer', () => {
    
    let buffer = null;
    before(() => {
        // TODO: read './test/non-palette-bitmap.bmp' into buffer variable
        // HINT: return a promise, this is async!
    });

    // "pinning" test, or "snapshot" test
    it('test whole transform', () => {
        // use the BitmapTransformer class, passing in the buffer
        // from the file read.
        const bitmap = new BitmapTransformer(buffer);

        // call transform, which will modify the buffer.
        // in this api, you pass in a transformation function
        bitmap.transform(invert);

        // after above step, the buffer has been modified

        // read the output file we saved earlier to been
        // the "standard" expected output file
        const buffer = fs.readFileSync('./test/inverted-expected.bmp');
        assert.deepEqual(bitmap.buffer, buffer);

        // if you don't have a standard file yet, you could write it out...
        // return fs.writeFileSync('./test/output.bmp', bitmap.buffer);
    });
});
