function getCount(objects) {
  let o = 0;
  console.log(objects.length);
  for (let p in objects) {
    console.log(objects[p].x, objects[p].y);
  }
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      return o++;
    }
  }
  console.log(o);
}