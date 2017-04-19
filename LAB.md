<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Bitmap Transformer
====


## Description

For this assignment you will be building a bitmap transformer class.

The core functionality is to pass a buffer to the bitmap transformer, and then apply
one or more color transforms on the image.
The Bitmap image will be read from disk, apply one or more color transforms on the data, 
and then write it out to a new file. 
This project will require the use of node `Buffer` in order to manipulate binary data.

The process will look something like this:

1. Open file using fs and read it into a buffer
2. Read the "header" information to get the needed info. If you encapsulate this into a function or object, 
it will be easier to test
3. Run a transform on the buffer based on the header information and the transform you are applying.
4. Write the buffer to a new file. 

One way to organize this is to:

Create a `BitmapTransformer` class that 
  1. takes a Buffer in the constructor
  1. Process the header info to find out 
    1. whether its pallette or non-pallette
    1 and where the pixels are for this transform
  1. has a transform method that applies your given transformation
    1. iterate the "color pixels", apply a transformation to each.
  1. has a property for getting to the transformed buffer

Include file system helper methods:
  1. add a static `BitmapTransformer.read` async function that reads the file and passes back the
  class instance
  1. add an instance `BitmapTransformer.write` async funciton that writes out the buffer to the specified filename
  
Class might look like:

```js
class BitmapTransformer {
  constructor(buffer) {}
  transform() {}
  write(filename, cb)
}

BitmapTransformer.read = function(filename, cb) {}
```

The wikipedia article found here [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format) 
describes the byte specification of a "windows bitmap file.":
* We'll be working the simplest version, meaning no compression
* The sample files fit "perfectly" in terms of byte size per row
* Your project should include at least one transform. 

This can be a difficult assignment so make sure to raise questions early. 

Ideas for easy transformations:

* Invert the colors (essentially subtract every color value from the max color value which is 255),
* Grayscale the colors, multiply each color value by a constant, just make sure your values don't go over 255.
* (red|green|blue)scale the colors, same as above but only multiply one of the colors.

Tests:

* Transformations are easiest to test in isolation, create transformation functions you can pass
pixel data to without having to load and image file.
* Consider use "pinning" or "snapshot" tests for testing overall transformed bitmap
* Be thoughtful about what to test (and what not to test!)

API:

Think about your library being used by another developer. Distinguish between the interface and your implementation.

### Rubric:
* Tests: 3pts
* npm scripts/package.json 2pts
* Read Bitmap Meta Data and Correctly locate pixels 5pts
* Successfully Apply Transform 5pts
* Project Design 5pts