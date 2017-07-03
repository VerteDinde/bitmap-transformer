# Bitmap Transformer

Bitmap Transformer is a simple JavaScript transformer that converts BMPs to an inverted color scheme and a greyscale color scheme.

### Last Update:

* Created a header module to allow us to parse through the BMP, read the correct header information and offset our bit count to the correct place to begin reading the file's actual data.
* Wrote an invert transformer that will write over the RBG values of the pixels within our BMP and write to a new file.
* Wrote a greyscale transformer that will take the avg value of our RGB values and return that value for each field.
* Wrote a successful test showing that our invert function works correctly, programmatically.
