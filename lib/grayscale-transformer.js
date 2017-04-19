function greyscale(obj) {
  const avg = (obj.r + obj.g + obj.b) / 3;
  return {
    r: avg,
    g: avg,
    b: avg
  };
}

module.exports = greyscale;