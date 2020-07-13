{
  let arr = [1, 2, 3];
  console.log(...arr);
  let str = "Hello";
  console.log(...str)


  function Point (x = 1, y = 2) {
  	this.x = x;
  	this.y = y;
  }
  const point = new Point();
  console.log(point)
}