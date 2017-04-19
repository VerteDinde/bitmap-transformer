<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Bitmap Transformer
====

## Description

For this assignment you will be building a bitmap transformer class.

The wikipedia article found here [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format) 
describes the byte specification of a "windows bitmap file.":
* We'll be working the simplest version, meaning no compression
* The sample files fit "perfectly" in terms of byte size per row

The core functionality is to pass a buffer to the bitmap transformer, and then apply
one or more color transforms to the image.

This will require the use of node `Buffer` in order to manipulate binary data.

This lab is more structured and there are tests to guide you:

1. Start with the tests in `bitmap-header.test.js`. This will require you to find
the location of the needed data using the wikipedia article.
  1. The first test requires that you have the right constants defined
  2. The second test requires that you create a `BitmapHeader` class that finds the information
  in the bitmap header and structures it as properties of the `bitmapHeader` instance.
2. Create two transformation functions, following the tests in `transformers.test.js`
3. The final test in `bitmap-transformer.test.js` requires you to integrate header and transformations
using a `BitmapHeader` class. The test is a pinning, or snapshot test, and a pre-converted standard is provided

### Rubric:
* Bitmap Header Tests Pass *2pts*
* Transform Tests Pass *2pts*
* Bitmap Transformer Tests Pass *3pts*
* Clean Code *3pts*