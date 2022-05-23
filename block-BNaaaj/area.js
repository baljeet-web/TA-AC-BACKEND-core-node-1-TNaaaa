function square(area) {
  return area * area;
}

function rectangle(length, width) {
  return length * width;
}

function circle(radius) {
  return (22 / 7) * radius * radius;
}



module.exports = {
  square: square,
  rectangle: rectangle,
  circle: circle,
};
